import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
// import {useSelector} from 'react-redux'
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import Input from "../../components/UI/Input";

import { login } from "../../redux/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState('');
  const authState = useSelector((state) => state.authState);
  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    props.login(user);
  };

  if (authState.authenticate) {
    return <Redirect to={"/"} />;
  }
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                label="Email address"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="primary" type="submit">
                SignIn
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default connect(null, { login })(Signin);
