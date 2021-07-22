import React from "react";

import { Row, Col, Form as BsForm, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { useQueryParams } from "./useQueryParams";

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

const isValidQueryParamsKey = (key) =>
  ["namespace", "scope", "cluster", "name"].includes(key);

const removeInvalidKeys = (keyValidator) => (object) =>
  Object.keys(object)
    .filter(keyValidator)
    .reduce(
      (acc, key) => ({
        ...acc,
        [key]: object[key],
      }),
      {}
    );

const keepValidQueryParamKeys = removeInvalidKeys(isValidQueryParamsKey);

export const Form = ({ onSubmit }) => {
  const [queryParamsData, setQueryParamsData] = useQueryParams();

  const defaultValues = {
    cluster: "dev",
    value: "",
    namespace: "",
    name: "",
    scope: "cluster",
    ...keepValidQueryParamKeys(queryParamsData),
  };

  const {
    register,
    handleSubmit,
    watch,
    formState,
    setValue,
    trigger,
  } = useForm({
    mode: "onChange",
    defaultValues,
  });
  const _onSubmit = (data) => {
    setQueryParamsData(keepValidQueryParamKeys(data));

    onSubmit(data);
  };

  const cluster = watch("cluster");
  const scope = watch("scope");

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
                value="dev"
                ref={register}
                onChange={(e) => {
                  setValue("cluster", e.target.value);
                  setValue("scope", "cluster");
                  trigger();
                }}
              />
              <RadioChoice
                name="cluster"
                value="prod"
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
                disabled={cluster === "prod"}
                ref={register}
                onChange={(e) => {
                  setValue("scope", e.target.value);
                  trigger();
                }}
              />
              <RadioChoice
                name="scope"
                value="namespace"
                disabled={cluster === "prod"}
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
              placeholder="K8s Namespace"
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
              placeholder="K8s secret name"
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
          onChange={() => trigger()}
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
