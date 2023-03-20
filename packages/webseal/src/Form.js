import React from "react";

import { Row, Col, Form as BsForm, Alert } from "react-bootstrap";
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

const YAML_LIKE_LINE_RE = /^([\w\d-_]+):\s(.*)$/m; // variable: some-value

// naive yaml style variable listing
const isYamlVariables = (string) => {
  const yamlRows = string
    .trim()
    .split("\n")
    .filter((row) => row.trim().length)
    .map((row) => row.match(YAML_LIKE_LINE_RE))
    .filter(Boolean);
  if (
    yamlRows.length ===
    string
      .trim()
      .split("\n")
      .filter((row) => row.trim().length).length
  ) {
    // only when all lines are detected
    return true;
  }
  return false;
};

const yamlToEnv = (string) =>
  string
    .trim()
    .split("\n")
    .map((row) => row.match(YAML_LIKE_LINE_RE))
    .filter(Boolean)
    .map(([_, key, value]) => `${key}=${value}`)
    .join("\n");

export const Form = ({ onSubmit, initialFormData }) => {
  const [queryParamsData, setQueryParamsData] = useQueryParams();

  const queryParams = keepValidQueryParamKeys(queryParamsData);

  const defaultValues = {
    ...initialFormData,
    ...queryParams,
    scope: queryParams.cluster === "prod" ? "namespace" : "cluster",
  };

  const { register, handleSubmit, watch, setValue, trigger, getValues } =
    useForm({
      mode: "onChange",
      defaultValues,
    });

  const _onSubmit = (data) => {
    setQueryParamsData(keepValidQueryParamKeys(data));
    onSubmit(data);
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

  const onValuePaste = (e) => {
    const value = e.clipboardData.getData("Text");
    if (isYamlVariables(value)) {
      e.preventDefault();
      setValue("value", yamlToEnv(value));
    }
  };

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
                  // setValue("namespace", undefined);
                  // setValue("name", undefined);
                  trigger();
                }}
              />
              <RadioChoice
                name="cluster"
                value="prod"
                {...register("cluster")}
                onChange={(e) => {
                  setValue("cluster", e.target.value);
                  setValue("scope", "namespace");
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
                {...register("scope")}
                onChange={(e) => {
                  setValue("scope", e.target.value);
                  trigger();
                }}
              />
              <RadioChoice
                name="scope"
                value="strict"
                disabled={cluster === "prod"}
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
      <BsForm.Group as={Row}>
        <BsForm.Label column>
          Namespace {cluster === "prod" ? "*" : ""}
        </BsForm.Label>
        <Col sm="9">
          <BsForm.Control
            name="namespace"
            {...register("namespace", { required: true })}
            required
            type="text"
            placeholder="K8s Namespace (optional in dev)"
          />
        </Col>
      </BsForm.Group>
      <BsForm.Group as={Row}>
        <BsForm.Label column>Secret name *</BsForm.Label>
        <Col sm="9">
          <BsForm.Control
            name="name"
            {...register("name", { required: true })}
            type="text"
            placeholder="K8s secret name"
          />
        </Col>
      </BsForm.Group>
      {cluster === "prod" && (
        <Alert variant="warning">
          ⚠️ En production, pensez à re-sceller l'ensemble de vos valeurs et
          récupérer le fichier YAML complet ci-dessous.
        </Alert>
      )}
      <BsForm.Group>
        <BsForm.Control
          as="textarea"
          name="value"
          value={value}
          id="value"
          style={{ marginTop: 10 }}
          rows={8}
          {...register("value", { required: true, value })}
          onPaste={onValuePaste}
          onChange={(e) => {
            setValue("value", e.target.value);
            trigger();
          }}
          placeholder={`MY_TOKEN=SomeSuperSecretToken
MY_PASSWORD=SomeSuperSecretPassword`}
        />
      </BsForm.Group>
    </BsForm>
  );
};
