import React, { Component } from 'react';
import { Container, Card , Form, Button, FormControl, Spinner } from 'react-bootstrap';
import AvailableDoctors from './AvailableDoctors';
import Footer from '../../components/Footer';
class ChannelDoctor extends Component{

    state={patientDetails : false , loading : true}
    nextButtonHandler = () => {
        this.setState({ patientDetails: true });
        document.getElementById('symptomForm').classList.add('d-none');
    }
    componentDidMount() {
        this.setState({ loading: false });
    }
    render() {
        if (this.state.loading) {
            return (
                <Container fluid className={'h-100 w-100 d-flex justify-content-center align-items-center'}>
                    <Spinner animation={'border'} variant={'dark'}/>
                </Container>
            );
        } else {
            return (
                <React.Fragment>
                <Container fluid className={'img-bg-primary d-flex justify-content-center align-items-center'}>
                    <Card className={'w-75 shadow round bg-white'} style={{minHeight : '75%'}}>
                        <Card.Body className={'w-100 text-center'}>
                            <Form id={'symptomForm'} style={{minHeight : '100%'}}>
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
                    </Container>
                </React.Fragment>
            );
        }
    }
}

export default ChannelDoctor;