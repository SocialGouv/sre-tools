import React from "react";

import { Row, Col, Form as BsForm, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";

const RadioChoice = React.forwardRef(({ name, value, ...props }, ref) => (
  <BsForm.Check
    inline
    ref={ref}
    name={name}
    id={`${name}-${value}`}
    label={value}
    type="radio"
    value={value}
    {...props}
  />
));

export const Form = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState,
    setValue,
    trigger,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      cluster: "dev2",
      value: "",
      namespace: "",
      name: "",
      scope: "cluster",
    },
  });
  const _onSubmit = (data) => {
    console.log("onSubmit", data);
    onSubmit(data);
  };
  const cluster = getValues("cluster");
  const scope = getValues("scope");
  return (
    <BsForm onSubmit={handleSubmit(_onSubmit)}>
      <Row>
        <Col xs={12} md={6}>
          <Row>
            <Col sm="3">
              <BsForm.Label>Cluster</BsForm.Label>
            </Col>
            <Col sm="9">
              <RadioChoice
                name="cluster"
                value="dev2"
                ref={register}
                onChange={(e) => {
                  setValue("cluster", e.target.value);
                  setValue("scope", "cluster");
                  trigger();
                }}
              />
              <RadioChoice
                name="cluster"
                value="prod2"
                ref={register}
                onChange={(e) => {
                  setValue("cluster", e.target.value);
                  setValue("scope", "strict");
                  trigger();
                }}
              />
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col xs={12} sm={3}>
              <BsForm.Label>Scope</BsForm.Label>
            </Col>
            <Col sm={9}>
              <RadioChoice
                name="scope"
                value="cluster"
                disabled={cluster === "prod2"}
                ref={register}
                onChange={(e) => {
                  setValue("scope", e.target.value);
                  trigger();
                }}
              />
              <RadioChoice
                name="scope"
                value="namespace"
                disabled={cluster === "prod2"}
                ref={register}
                onChange={(e) => {
                  setValue("scope", e.target.value);
                  trigger();
                }}
              />
              <RadioChoice
                name="scope"
                value="strict"
                ref={register}
                onChange={(e) => {
                  setValue("scope", e.target.value);
                  trigger();
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      {(scope === "namespace" || scope === "strict") && (
        <BsForm.Group as={Row}>
          <BsForm.Label column>Namespace</BsForm.Label>
          <Col sm="9">
            <BsForm.Control
              name="namespace"
              ref={register({ required: true })}
              required
              type="text"
              placeholder="Namespace"
            />
          </Col>
        </BsForm.Group>
      )}
      {scope === "strict" && (
        <BsForm.Group as={Row}>
          <BsForm.Label column>Secret name</BsForm.Label>
          <Col sm="9">
            <BsForm.Control
              name="name"
              ref={register({ required: true })}
              type="text"
              placeholder="Secret name"
            />
          </Col>
        </BsForm.Group>
      )}
      <BsForm.Group>
        <BsForm.Control
          as="textarea"
          name="value"
          style={{ marginTop: 10 }}
          rows={4}
          ref={register({ required: true })}
          placeholder="Value to encrypt"
        />
      </BsForm.Group>
      <Button
        disabled={!formState.isDirty || !formState.isValid}
        block
        variant="primary"
        type="submit"
      >
        Encrypt
      </Button>
    </BsForm>
  );
};
