import React from 'react';
import { Row , Container, Col } from 'react-bootstrap';
import Logo from '../components/Logo';
const Footer = ({marginTop}) => (
    <Container className={'bg-dark h-25'} style={{marginTop : marginTop ? marginTop : 0}} fluid>
        <Row className={'h-100'}>
            <Col className={'d-flex align-items-center bg-light h-100'} md={2}>
                <Logo/>
            </Col>
            <Col className={'h-100 d-flex align-items-center'} md={4}>
                <i className={'fab text-white fa-2x fa-facebook social-icons mr-4'}></i>
                <i className={'fab text-white fa-2x fa-twitter social-icons mr-4'}></i>
                <i className={'fab text-white fa-2x fa-instagram social-icons'}></i>
            </Col>
            <Col className={'h-100 d-flex align-items-center'} md={6}>
                <p className={'text-white'}>(C) {new Date().getFullYear()}</p>
            </Col>
        </Row>
    </Container>
);

export default Footer;