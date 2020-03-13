import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Logo from '../../components/Logo';


const Login = (props) => (
    <Container className={'h-100'}>
        <div className={'h-100 w-100 shadow round'}>
            <div className={'d-flex justify-content-center align-items-center'}>
                <Logo/>
            </div>
            <Form className={'d-flex justify-content-center align-items-center'}>
                <div className={'mt-5'}>
                    <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control size={'sm'} type={'email'} placeholder={'Type Email Address'} id={'email'} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control size={'sm'} type={'password'} placeholder={'Type Password'} id={'password'} required/>
                </Form.Group>
                <Form.Group>
                    <Button size={'sm'} variant={'primary'}>Login</Button>
                </Form.Group>
                </div>
            </Form>
        </div>
    </Container>
);

export default Login;