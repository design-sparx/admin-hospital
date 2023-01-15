import React from 'react';
import {Button, Card, FloatingLabel, Form} from 'react-bootstrap';
import Wrapper from '../layout';

const ResetPassword = () => {
  return (
    <div>
      <Wrapper>
        <Card className="col-7 mx-auto">
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
      </Wrapper>
    </div>
  );
};

export default ResetPassword;
