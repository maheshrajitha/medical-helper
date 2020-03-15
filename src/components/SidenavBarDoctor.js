import React from 'react';
import { Container , Row , Col, Navbar, Dropdown } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import Logo from './Logo';
const SidenavBarDoctor = (props) => (
    <Container fluid>
        <Row>
            <Col sm={2} className={'h-auto primary-bg-color'} style={{ minHeight: '100vh' }}>
                <div className={'mt-4 mb-4 w-100'}>
                    <Logo sm light/>
                </div>
                <ul className={'nav flex-column'}>
                    <li className={'nav-item active'}>
                        <a className={'nav-link text-light'} href={'ghgkh'}><i className="far fa-calendar-times"></i>&nbsp;&nbsp;My Appoinments</a>
                    </li>
                </ul>
            </Col>
            <Col sm={10} className={'content-bg-primary'}>
                <Navbar className={'mb-3'} bg={'light'}>
                    <div className={'justify-content-end d-flex w-100'}>
                        <Dropdown className={'mr-5 h-10'}>
                            <DropdownToggle style={{borderRadius : 50}} size={'sm'} variant={'light'}>
                                <i className="far fa-lg fa-bell"></i>
                                <span className={'badge badge-pill badge-light'} variant={'secondary'}>6</span>
                            </DropdownToggle>
                            <DropdownMenu alignRight>
                                <Dropdown.Header>New Channellings</Dropdown.Header>
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