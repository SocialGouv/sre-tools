import React from "react";

import { Row, Col, Form as BsForm, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
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

export const Form = ({ onSubmit, initialFormData }) => {
  const [queryParamsData, setQueryParamsData] = useQueryParams();

  const queryParams = keepValidQueryParamKeys(queryParamsData);

  const defaultValues = {
    ...initialFormData,
    ...queryParams,
    scope: queryParams.cluster === "prod" ? "strict" : "cluster",
  };

  const { register, handleSubmit, watch, setValue, trigger, getValues } =
    useForm({
      mode: "onChange",
      defaultValues,
    });

  const _onSubmit = (data) => {
    setQueryParamsData(keepValidQueryParamKeys(data));
    onSubmit(data);
    //console.log("submit", data);
  };

  const cluster = watch("cluster");
  const scope = watch("scope");
  const value = watch("value");

  React.useEffect(() => {
    const subscription = watch(
      ("value",
      ({ name, type }) => {
        const values = getValues();
        _onSubmit(values);
      })
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  React.useEffect(() => {
    const subscription = watch(
      ("cluster",
      ({ name, type }) => {
        const values = getValues();
        _onSubmit(values);
      })
    );
    return () => subscription.unsubscribe();
  }, [watch]);

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
                label="dev / preprod"
                {...register("cluster")}
                onChange={(e) => {
                  setValue("cluster", e.target.value);
                  setValue("scope", "cluster");
                  trigger();
                }}
              />
              <RadioChoice
                name="cluster"
                value="prod"
                {...register("cluster")}
                onChange={(e) => {
                  setValue("cluster", e.target.value);
                  setValue("scope", "strict");
                  trigger();
                }}
              />
            </Col>
          </Row>
        </Col>
        <Col style={{ display: "none" }}>
          <Row>
            <Col xs={12} sm={3}>
              <BsForm.Label>Scope</BsForm.Label>
            </Col>
            <Col sm={9}>
              <RadioChoice
                name="scope"
                value="cluster"
                disabled={cluster === "prod"}
                {...register("scope")}
                onChange={(e) => {
                  setValue("scope", e.target.value);
                  trigger();
                }}
              />
              <RadioChoice
                name="scope"
                value="namespace"
                disabled={cluster === "prod"}
                {...register("scope")}
                onChange={(e) => {
                  setValue("scope", e.target.value);
                  trigger();
                }}
              />
              <RadioChoice
                name="scope"
                value="strict"
                {...register("scope")}
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
              {...register("namespace", { required: true })}
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
              {...register("name", { required: true })}
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
          id="value"
          style={{ marginTop: 10 }}
          rows={8}
          {...register("value", { required: true, value })}
          placeholder={`MY_TOKEN=SomeSuperSecretToken
MY_PASSWORD=SomeSuperSecretPassword`}
        />
      </BsForm.Group>
    </BsForm>
  );
};
