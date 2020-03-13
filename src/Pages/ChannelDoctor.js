import React, { Component } from 'react';
import { Container, Card , Form, Button, FormControl, Alert } from 'react-bootstrap';
import primaryImg from '../assets/primary-img.jpg';
import AvailableDoctors from './channelling/AvailableDoctors';

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
                <div className={'w-100 position-relative'}>
                    <img src={primaryImg} className={'img-fluid'}/>
                    <div className={'over-lay-text d-flex align-items-center justify-content-center text-center h-100 w-100'}>
                        <div>
                            <h1 className={'text-white'}>Caring For Life</h1> 
                            <h4 className={'font-weight-bold text-white'}>
                                F i n d &nbsp; Y o u r &nbsp; D o c t o r
                            </h4>
                        </div>
                    </div>
                    <div className={'over-lay-form w-100 h-75 d-flex justify-content-center'}>
                        <Card className={'w-75 h-100 round shadow'}>
                            <Alert className={'mb-5'} variant={'info'}>Enter Your Symptoms We Will Find A Doctor For You ...</Alert>
                            <Card.Body className={'h-100'}>
                                <Form id={'symptomForm'} className={'h-100'}>
                                    <Form.Group>
                                        <Form.Label>Type Symptom 1</Form.Label>
                                        <FormControl type={'text'} className={'font-weight-bold'} id={'symptomOne'} placeholder={'Type Symptom 1'} size={'sm'} />
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