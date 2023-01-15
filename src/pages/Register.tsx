import React from 'react';
import {Button, Card, FloatingLabel, Form, Stack} from 'react-bootstrap';
import {Facebook, Github, Google, Microsoft, Twitter} from "react-bootstrap-icons";
import Wrapper from '../layout';
import {LinkContainer} from "react-router-bootstrap";

const Register = () => {
  return (
    <div>
      <Wrapper>
        <Card className="col-7 mx-auto">
          <Card.Header>
            <p className="h5">register</p>
          </Card.Header>
          <Card.Body>
            <Stack>
              <div className="d-flex flex-wrap gap-2">
                <Button variant="outline-secondary"><Facebook className="me-2"/>Signup with Facebook</Button>
                <Button variant="outline-secondary"><Google className="me-2"/>Signup with Google</Button>
                <Button variant="outline-secondary"><Microsoft className="me-2"/>Signup with Microsoft</Button>
                <Button variant="outline-secondary"><Twitter className="me-2"/>Signup with Twitter</Button>
                <Button variant="outline-secondary"><Github className="me-2"/>Signup with GitHub</Button>
              </div>
              <hr/>
              <Form className="mb-3">
                <FloatingLabel controlId="email" label="Full name" className="mb-3">
                  <Form.Control type="text" placeholder="full name"/>
                </FloatingLabel>
                <FloatingLabel controlId="email" label="Email address" className="mb-3">
                  <Form.Control type="email" placeholder="name@example.com"/>
                </FloatingLabel>
                <FloatingLabel controlId="password" label="Password" className="mb-3">
                  <Form.Control type="password" placeholder="Password"/>
                </FloatingLabel>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out"/>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">Login</Button>
              </Form>
              <p className="text-center mb-2">Already have an account?
                <LinkContainer to="/login"><a href="" className="ms-1">Log In</a></LinkContainer>
              </p>
              <LinkContainer to="/reset-password" className="text-center mb-0">
                <a href="">Reset password?</a></LinkContainer>
            </Stack>
          </Card.Body>
        </Card>
      </Wrapper>
    </div>
  );
};

export default Register;
