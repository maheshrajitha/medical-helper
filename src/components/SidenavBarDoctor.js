import React from 'react';
import { Container , Row , Col, Navbar, Dropdown, Badge } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
const SidenavBarDoctor = (props) => (
    <Container fluid>
        <Row>
            <Col sm={2} className={'vh-100 primary-bg-color'}>
                <h2 className={'text-primary text-center mt-3 mb-3'}><i className="fas fa-user-md"></i></h2>
                <ul className={'nav flex-column'}>
                    <li className={'nav-item active'}>
                        <a className={'nav-link text-light'} href={'ghgkh'}><i className="far fa-calendar-times"></i>&nbsp;&nbsp;My Appoinments</a>
                    </li>
                </ul>
            </Col>
            <Col sm={10}>
                <Navbar className={'mb-3'} bg={'light'}>
                    <div className={'justify-content-end d-flex w-100'}>
                        <Dropdown className={'mr-5'}>
                            <DropdownToggle size={'sm'} variant={'light'}>
                                <i className="far fa-lg fa-bell"></i>
                                <Badge className={'ml-2'} variant={'secondary'}>6</Badge>
                            </DropdownToggle>
                            <DropdownMenu alignRight>
                                <DropdownItem>
                                    i 1
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <span className={'d-none d-sm-inline-block'}>
                            <Dropdown>
                                <DropdownToggle size={'sm'} variant={'outline-primary'}>
                                    <span className="text-secondary"><i className="fas fa-lg fa-user-tie"></i></span>
                                </DropdownToggle>
                                <DropdownMenu alignRight>
                                    <DropdownItem>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </span>
                    </div>
                </Navbar>
                {props.children}
            </Col>
        </Row>
    </Container>
);

export default SidenavBarDoctor;