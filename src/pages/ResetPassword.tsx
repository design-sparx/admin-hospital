import React from 'react';
import {Breadcrumb, Button, Card, FloatingLabel, Form} from 'react-bootstrap';
import Wrapper from '../layout';
import {LinkContainer} from "react-router-bootstrap";

const ResetPassword = () => {
  return (
    <div>
      <Wrapper>
        <section className="section d-flex justify-content-between">
          <p className="h5">Reset password</p>
          <Breadcrumb>
            <LinkContainer to="/">
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            </LinkContainer>
            <Breadcrumb.Item active>Reset password</Breadcrumb.Item>
          </Breadcrumb>
        </section>
        <section className="section">
          <Card className="col-sm-12 col-md-8 col-lg-7 mx-auto">
            <Card.Header>
              <p className="h5">reset password</p>
            </Card.Header>
            <Card.Body>
              <Form className="mb-3">
                <FloatingLabel controlId="email" label="Enter your email" className="mb-3">
                  <Form.Control type="email" placeholder="full name"/>
                </FloatingLabel>
                <Button variant="primary" type="submit" className="w-100">Send reset link</Button>
              </Form>
            </Card.Body>
          </Card>
        </section>
      </Wrapper>
    </div>
  );
};

export default ResetPassword;
