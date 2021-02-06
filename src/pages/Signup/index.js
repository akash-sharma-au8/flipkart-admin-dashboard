import React, { useState,useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import Input from '../../components/UI/Input'
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../redux/actions";

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authState = useSelector((state) => state.authState);
  const userState = useSelector((state) => state.userState);


  useEffect(() => {
    if (!userState.loading) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }
  }, [userState.loading]);

  const userSignUp = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    props.signup(user);
  };

  if (authState.authenticate) {
    return <Redirect to={"/"} />;
  }

  if (userState.loading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <Container>
        {userState.message}
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userSignUp}>
              <Row>
                <Col md={6}>
                  <Input
                    label="FirstName"
                    type="text"
                    placeholder="firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="LastName"
                    type="text"
                    placeholder="lastname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>
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
                SignUp
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default connect(null, { signup })(Signup);
