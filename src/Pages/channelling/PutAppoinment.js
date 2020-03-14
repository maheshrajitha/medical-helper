import React from 'react'
import { Container, Card, Row, Col, Form , Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import secondaryImg from '../../assets/primary-img2.jpg';
import { withRouter } from 'react-router-dom';

class PutAppoinment extends React.Component{

    componentDidMount() {
        //this.props.location.search;
        console.log(this.props.match.params.docId);
    }
    
    render() {
        return (
            <Container className={'h-100'}>
                <Card className={'h-100 w-100'}>
                    {this.props.doctor === null || this.props.doctor === '' ? <div className={'w-100 h-100 d-flex justify-content-center align-items-center'}>
                        <Spinner animation={'border'} />
                    </div> : 
                        <>
                            <Card.Header className={'bg-white text-center'}><strong >Channel Dr. {this.props.doctor.name}</strong></Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={7}>
                                        <img src={secondaryImg} className={'img-fluid'} alt={'secondaryimg'}/>
                                    </Col>
                                    <Col md={5}>
                                        <Form>
                                            <Form.Group>
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control size={'sm'} type={'text'} id={'name'} placeholder={'Type Your Name'} required/>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Age</Form.Label>
                                                <Form.Control size={'sm'} id={'age'} placeholder={'Type Your Age'} type={'number'} required/>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Date</Form.Label>
                                                <Form.Control type={'date'} required id={'date'}/>
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </>
                    }
                </Card>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        doctor : state.userReducer.doctor
    }
}

export default withRouter(connect(mapStateToProps) (PutAppoinment));