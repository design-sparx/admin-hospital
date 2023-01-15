import React, {ReactNode} from 'react';
import {Col, Container, Form, Nav, Navbar, NavDropdown, Row} from 'react-bootstrap';
import Sidebar from "./Sidebar";

import './style.scss'

interface IProps {
  children: ReactNode
}

const Wrapper = ({children}: IProps) => {
  return (
    <div>
      <Row>
        <Col lg={2}>
          <Sidebar/>
        </Col>
        <Col lg={10} className="main bg-light px-0">
          <Navbar className="top-nav p-3">
            <Container fluid>
              <Navbar.Toggle aria-controls="navbarScroll"/>
              <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
                <Nav
                  className="ms-auto my-2 my-lg-0"
                  style={{maxHeight: '100px'}}
                  navbarScroll
                >
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#" disabled>
                    Link
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container className="p-4">
            {children}
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Wrapper;
