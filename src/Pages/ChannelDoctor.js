import React, { Component } from 'react';
import { Container, Card , Form, Button, FormControl, Alert } from 'react-bootstrap';
import primaryImg from '../assets/primary-img.jpg';
import AvailableDoctors from './channelling/AvailableDoctors';
import Footer from '../components/Footer';

class ChannelDoctor extends Component{
    state={patientDetails : false}
    constructor(props) {
        super(props);
    }

    nextButtonHandler = () => {
        this.setState({ patientDetails: true });
        document.getElementById('symptomForm').classList.add('d-none');
    }
    render() {
        return (
            <Container className={'h-100'}>
                <div className={'w-100 h-100 position-relative'}>
                    <img src={primaryImg} alt={'bg'} className={'img-fluid'} />
                    <div className={'over-lay-form d-flex justify-content-center align-items-start w-100 h-100'}>
                        <Card className={'bg-white round shadow h-75 w-75'}>
                            <Card.Header>Channel Your Doctor</Card.Header>
                            <Card.Body className={'d-flex align-items-center justify-content-center h-100 w-100'}>
                                <Form id={'symptomForm'} className={'w-100'}>
                                    <Form.Group>
                                        <Form.Label>Symptom One</Form.Label>
                                        <Form.Control type={'text'} placeholder={'Type Symptom One'} id={'symptomOne'} size={'sm'}/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Type Symptom 2</Form.Label>
                                        <FormControl type={'text'} className={'font-weight-bold'} id={'symptomTwo'} placeholder={'Type Symptom 2'} size={'sm'}/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Type Symptom 2</Form.Label>
                                        <FormControl type={'text'} className={'font-weight-bold'} id={'symptomTwo'} placeholder={'Type Symptom 2'} size={'sm'}/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Type Symptom 2</Form.Label>
                                        <FormControl type={'text'} className={'font-weight-bold'} id={'symptomTwo'} placeholder={'Type Symptom 2'} size={'sm'}/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button onClick={this.nextButtonHandler} variant={'primary'} className={'w-25'} size={'sm'}>Next</Button>
                                    </Form.Group>
                                </Form>
                                {this.state.patientDetails && <AvailableDoctors/>}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
        );
    }
}

export default ChannelDoctor;