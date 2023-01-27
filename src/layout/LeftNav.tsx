import React, {HTMLAttributes, ReactNode} from 'react';
import {Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {BoxArrowInRight, ChevronRight, DoorOpen, Hospital, House, XDiamond} from "react-bootstrap-icons";
import {Sidebar} from 'react-pro-sidebar';

interface IProps extends HTMLAttributes<ReactNode> {
  children?: ReactNode
}

const LeftNav = ({children}: IProps): JSX.Element => {
  return (
    <aside className="sidebar">
      <div className="sticky-top" id="nav-bar">
        <Sidebar breakPoint="md">
          <div className="d-grid gap-2 pt-4 px-3">
            <a href="#"
               className="h3 fw-normal d-flex align-items-center justify-content-center text-decoration-none pb-0 pb-md-3 nav-icon">
              <Hospital size={36} className="icon"/>
              <span className="ms-2">Hospital</span>
            </a>
            <LinkContainer to="/">
              <Button variant="link" className="text-decoration-none btn-icon" title="dashboard">
                <House size={18}/>
                <span className="ms-2">Dashboard</span>
              </Button>
            </LinkContainer>
            <ul className="list-unstyled ps-0">
              <li className="mb-1">
                <Button variant="link"
                        className="d-inline-flex align-items-center text-decoration-none btn-icon mb-2"
                        data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true"
                        title="more authentication">
                  <BoxArrowInRight size={18}/>
                  <span className="ms-2">Authentication</span>
                  <ChevronRight size={14} className="ms-auto toggle-icon"/>
                </Button>
                <div className="collapse show ms-0 ms-md-2" id="home-collapse">
                  <div className="btn-toggle-nav d-grid gap-1">
                    <LinkContainer to="/login">
                      <Button variant="link" className="text-decoration-none btn-icon" title="login">
                        <BoxArrowInRight size={18}/>
                        <span className="ms-2">Login</span>
                      </Button>
                    </LinkContainer>
                    <LinkContainer to="/signup">
                      <Button variant="link" className="text-decoration-none btn-icon" title="signup">
                        <DoorOpen size={18}/>
                        <span className="ms-2">Signup</span>
                      </Button>
                    </LinkContainer>
                    <LinkContainer to="/reset-password">
                      <Button variant="link" className="text-decoration-none btn-icon"
                              title="reset password">
                        <XDiamond size={18}/>
                        <span className="ms-2">Reset password</span>
                      </Button>
                    </LinkContainer>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Sidebar>
      </div>
    </aside>
  );
};

export default LeftNav;
