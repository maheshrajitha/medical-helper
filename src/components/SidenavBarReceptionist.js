import React from 'react'
import { Container, Row, Col, Navbar, Dropdown } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import { Link } from 'react-router-dom';
import Logo from './Logo';
const SidenavBarReceptionist = (props) => (
    <Container fluid>
        <Row style={{minHeight : '100vh'}}>
            <Col md={2} className={'h-auto primary-bg-color'}>
                <div className={'w-100 mt-3'}>
                    <Logo light sm/>
                </div>
                <ul className={'nav flex-column'}>
                    <li className={'nav-item active'}>
                        <Link className={'nav-link text-light'} to={'/appoinments'}>
                            <i className={'far fa-calendar-check'}> &nbsp;Appoinments</i>
                        </Link>
                    </li>
                </ul>
            </Col>
            <Col className={'h-auto content-bg-primary'} md={10}>
                <Navbar className={'mb-5'} variant={'light'} bg={'light'}>
                    <div className={'w-100 d-flex justify-content-end'}>
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
export default SidenavBarReceptionist;