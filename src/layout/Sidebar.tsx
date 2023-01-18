import React from 'react';
import {Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {BoxArrowInRight, DoorOpen, Hospital, House, XDiamond} from "react-bootstrap-icons";

const Sidebar = () => {
  return (
    <div className="sticky-top">
      <div className="d-grid gap-2 px-2 py-4">
        <p className="display-6 text-center fw-normal d-flex align-items-center justify-content-center">
          <Hospital size={36} className="me-2"/>
          <span>Hospital</span>
        </p>
        <LinkContainer to="/">
          <Button variant="link" className="text-start text-decoration-none">
            <House className="me-2"/>Dashboard</Button>
        </LinkContainer>
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <Button variant="link"
                    className="btn-toggle d-inline-flex align-items-center rounded border-0 w-100 text-start text-decoration-none"
                    data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
              Authentication
            </Button>
            <div className="collapse show" id="home-collapse">
              <div className="btn-toggle-nav d-grid gap-1">
                <LinkContainer to="/login">
                  <Button variant="link" className="text-start text-decoration-none">
                    <BoxArrowInRight className="me-2"/>Login
                  </Button>
                </LinkContainer>
                <LinkContainer to="/signup">
                  <Button variant="link" className="text-start text-decoration-none">
                    <DoorOpen className="me-2"/>Signup
                  </Button>
                </LinkContainer>
                <LinkContainer to="/reset-password">
                  <Button variant="link" className="text-start text-decoration-none">
                    <XDiamond className="me-2"/>Reset password
                  </Button>
                </LinkContainer>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
