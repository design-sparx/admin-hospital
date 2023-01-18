import React, {ReactNode} from 'react';
import {Col, Container, Form, Image, InputGroup, Nav, Navbar, NavDropdown, Row} from 'react-bootstrap';
import {Bell, BoxArrowLeft, ChatDots, FullscreenExit, Inbox, Person, Search} from "react-bootstrap-icons";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

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
          <Navbar className="top-nav p-3 sticky-top border-bottom">
            <Container fluid>
              <Navbar.Toggle aria-controls="navbarScroll"/>
              <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex col-4">
                  <InputGroup className="search-box">
                    <InputGroup.Text id="basic-addon1" className="bg-white"><Search/></InputGroup.Text>
                    <Form.Control
                      placeholder="search here..."
                      aria-label="search"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Form>
                <Nav
                  className="ms-auto my-2 my-lg-0 align-items-center gap-2"
                  style={{maxHeight: '100px'}}
                  navbarScroll
                >
                  <Nav.Link href="#action1" title="toggle fullscreen">
                    <FullscreenExit size={20}/>
                  </Nav.Link>
                  <Nav.Link href="#action1" title="notifications">
                    <Bell size={20}/>
                  </Nav.Link>
                  <Nav.Link href="#action2" title="messages">
                    <ChatDots size={20}/>
                  </Nav.Link>
                  <NavDropdown
                    title={
                      <Image
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        height={32}
                        width={32}
                        className="rounded-circle"/>
                    }
                    id="navbarScrollingDropdown"
                    className="dropstart">
                    <NavDropdown.Item href="#action3"><Person className="me-2"/>Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action4"><Inbox className="me-2"/>Inbox</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="#action5"><BoxArrowLeft className="me-2"/>Sign out</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container className="p-4">
            {children}
          </Container>
          <Footer/>
        </Col>
      </Row>
    </div>
  );
};

export default Wrapper;
