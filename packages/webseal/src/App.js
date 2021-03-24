import React, { useState } from "react";
import { Card, Jumbotron, Container, Row, Col } from "react-bootstrap";
import { getSealedSecret, encryptValue } from "@socialgouv/aes-gcm-rsa-oaep";
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
  const [encrypted, setEncrypted] = useState(null);
  const [yamlResult, setYamlResult] = useState(null);
  const onSubmit = (data) => {
    setYamlResult("");
    setEncrypted("");
    const pemKey = certificates[data.cluster];
    encryptValue({
      pemKey,
      ...data,
    })
      .then(async (value) => {
        setEncrypted(value);
        const sealedSecret = await getSealedSecret({
          pemKey,
          namespace: data.namespace || "some-namespace",
          name: data.name || "some-secret-name",
          scope: data.scope,
          values: {
            VALUE: data.value,
          },
        });

        setYamlResult(yaml.dump(sealedSecret));
      })
      .catch(console.log);
  };
  return (
    <Container>
      <Intro />
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Form onSubmit={onSubmit} />
            </Card.Body>
          </Card>
          {encrypted && (
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
          )}
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
