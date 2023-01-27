import React, {ReactNode, useState} from 'react';
import {Button, Container, Form, Image, InputGroup, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {
  Bell,
  BoxArrowLeft,
  ChatDots,
  Fullscreen,
  FullscreenExit,
  Inbox,
  MenuApp,
  Person,
  Search
} from "react-bootstrap-icons";
import {useProSidebar} from "react-pro-sidebar";
import Footer from "./Footer";
import LeftNav from './LeftNav';

import './style.scss';

interface IProps {
  children: ReactNode
}

const Wrapper = ({children}: IProps) => {
  const {collapseSidebar, toggleSidebar} = useProSidebar();
  const [fullScreen, setFullScreen] = useState(false);

  const toggleFullscreen = (): void => {
    const elem = document.getElementById("content") as HTMLElement | null | any;
    const doc = document as any;
    if (elem) {
      if (fullScreen) {
        if (doc.exitFullscreen) {
          doc.exitFullscreen();
        } else if (doc.webkitExitFullscreen) {
          doc.webkitExitFullscreen();
        } else if (doc.mozCancelFullScreen) {
          doc.mozCancelFullScreen();
        } else if (doc.msExitFullscreen) {
          doc.msExitFullscreen();
        }
        setFullScreen(false);
      } else {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
          elem.webkitRequestFullScreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
        setFullScreen(true);
      }
    }
  }

  return (
    <div className="content d-flex" id="content">
      <LeftNav/>
      <div className="main bg-light px-0 w-100">
        <Navbar className="top-nav p-3 sticky-top border-bottom">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
              <div className="header_toggle">
                <div className="d-none d-md-block">
                  <Button variant="light" title="toggle left navigation"
                          onClick={() => collapseSidebar()}><MenuApp/></Button>
                </div>
                <div className="d-block d-md-none">
                  <Button variant="light" title="toggle left navigation"
                          onClick={() => toggleSidebar()}><MenuApp/></Button>
                </div>
              </div>
              <Form className="d-flex col-4 ms-3">
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
                <Nav.Link href="#action1" title="toggle fullscreen" onClick={toggleFullscreen}>
                  {fullScreen ? <FullscreenExit size={20}/> : <Fullscreen size={20}/>}
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
                  <NavDropdown.Item href="#action3"><Person
                    className="me-2"/>Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#action4"><Inbox className="me-2"/>Inbox</NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Item href="#action5"><BoxArrowLeft className="me-2"/>Sign
                    out</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="p-4">
          {children}
        </Container>
        <Footer/>
      </div>
    </div>
  );
};

export default Wrapper;
