import React from 'react';
import {Breadcrumb, Button, Card, FloatingLabel, Form, Stack} from 'react-bootstrap';
import {Facebook, Github, Google, Microsoft, Twitter} from "react-bootstrap-icons";
import Wrapper from '../layout';
import {LinkContainer} from "react-router-bootstrap";

const Login = () => {
  return (
    <div>
      <Wrapper>
        <section className="section d-flex justify-content-between">
          <p className="h5">Login</p>
          <Breadcrumb>
            <LinkContainer to="/">
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            </LinkContainer>
            <Breadcrumb.Item active>Login</Breadcrumb.Item>
          </Breadcrumb>
        </section>
        <section className="section">
          <Card className="col-sm-12 col-md-8 col-lg-7 mx-auto">
            <Card.Header>
              <p className="h5">login</p>
            </Card.Header>
            <Card.Body>
              <Stack>
                <div className="d-flex flex-wrap gap-2">
                  <Button variant="outline-secondary"><Facebook className="me-2"/>Login with Facebook</Button>
                  <Button variant="outline-secondary"><Google className="me-2"/>Login with Google</Button>
                  <Button variant="outline-secondary"><Microsoft className="me-2"/>Login with Microsoft</Button>
                  <Button variant="outline-secondary"><Twitter className="me-2"/>Login with Twitter</Button>
                  <Button variant="outline-secondary"><Github className="me-2"/>Login with GitHub</Button>
                </div>
                <hr/>
                <Form className="text-center mb-3">
                  <FloatingLabel controlId="email" label="Email address" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com"/>
                  </FloatingLabel>
                  <FloatingLabel controlId="password" label="Password" className="mb-3">
                    <Form.Control type="password" placeholder="Password"/>
                  </FloatingLabel>
                  <Button variant="primary" type="submit" className="w-100">Login</Button>
                </Form>
                <p className="text-center mb-2">Create an account?
                  <LinkContainer to="/signup"><a href="" className="ms-1">Sign Up</a></LinkContainer>
                </p>
                <LinkContainer to="/reset-password" className="text-center mb-0">
                  <a href="">Reset password?</a></LinkContainer>
              </Stack>
            </Card.Body>
          </Card>
        </section>
      </Wrapper>
    </div>
  );
};

export default Login;
