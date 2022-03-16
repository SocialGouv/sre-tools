import React, { useState } from "react";
import { Card, Jumbotron, Container, Row, Col } from "react-bootstrap";
import { getSealedSecret } from "@socialgouv/aes-gcm-rsa-oaep";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Clipboard } from "react-feather";
import yaml from "js-yaml";

import "bootstrap/dist/css/bootstrap.min.css";

import { Form } from "./Form";
import { certificates } from "./certificates.js";

const Intro = () => (
  <Jumbotron style={{ padding: "2rem 1rem" }}>
    <h1>WebSeal</h1>
    <p>Client-side sealed-secrets generation</p>
  </Jumbotron>
);

const CodeArea = (props) => (
  <textarea
    {...props}
    style={{
      fontSize: "0.8rem",
      fontFamily: "Courier",
      border: "1px solid #ccc",
      width: "100%",
      padding: 5,
      height: 400,
      ...(props.style || {}),
    }}
  ></textarea>
);

const Copier = ({ text }) => {
  const [copied, setCopied] = useState(false);
  return (
    <CopyToClipboard
      text={text}
      onCopy={() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
    >
      <Clipboard
        style={{
          marginLeft: 10,
          cursor: "pointer",
          transition: "all 0.2s ease-in",
        }}
        color={copied ? "green" : "black"}
        title="Copy"
        size={16}
      />
    </CopyToClipboard>
  );
};

const Editor = () => {
  const [formData, setFormData] = useState({
    cluster: "dev",
    value: "",
    namespace: "",
    name: "",
  });
  const [encrypted, setEncrypted] = useState(null);
  const [yamlResult, setYamlResult] = useState(null);
  const onSubmit = async (data) => {
    //console.log("onSubmit", data);
    setFormData(data);
    setYamlResult("");
    setEncrypted("");
    if (data.value && data.value !== formData.value) {
      const pemKey = certificates[data.cluster];
      const values = {};
      if (data.value.match(/^([\w_-\d]+)=(.+)$/im)) {
        data.value.split("\n").forEach((row) => {
          const matches = row.match(/^([\w_-\d]+)=(.*)$/i);
          if (matches) {
            values[matches[1]] = matches[2];
          }
        });
      } else {
        values.VALUE = data.value;
      }
      const sealedSecret = await getSealedSecret({
        pemKey,
        namespace: data.namespace || null,
        name: data.name || "some-secret-name",
        scope: data.scope,
        values,
      });
      if (data.scope === "strict" && (!data.namespace || !data.name)) {
        console.log("namespace and name are mandatory");
        setYamlResult("");
        setEncrypted("");
      } else if (!data.value) {
        console.log("value is mandatory");
        setYamlResult("");
        setEncrypted("");
      } else {
        const keys = Object.keys(values);
        if (keys.length === 1) {
          setEncrypted(sealedSecret.spec.encryptedData[keys[0]]);
        } else {
          setEncrypted(
            "Not available for multiple values, use the below secret"
          );
        }
        setYamlResult(yaml.dump(sealedSecret, { noRefs: true, lineWidth: -1 }));
      }
    }
  };
  return (
    <Container>
      <Intro />
      <Row>
        <Col xs={12}>
          <Form onSubmit={onSubmit} initialFormData={formData} />

          {
            <>
              <Card style={{ marginTop: 10 }}>
                <Card.Body>
                  <Card.Title>
                    Encrypted <Copier text={encrypted} />
                  </Card.Title>
                  <CodeArea defaultValue={encrypted} style={{ height: 200 }} />
                </Card.Body>
              </Card>
              <Card style={{ marginTop: 10 }}>
                <Card.Body>
                  <Card.Title>
                    SealedSecret <Copier text={yamlResult} />
                  </Card.Title>
                  <CodeArea defaultValue={yamlResult} />
                </Card.Body>
              </Card>
            </>
          }
        </Col>
      </Row>
    </Container>
  );
};

export default function App() {
  return (
    <div className="App">
      <Editor />
    </div>
  );
}
