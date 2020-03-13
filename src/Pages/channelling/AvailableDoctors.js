import React from 'react';
import { Table , Spinner, Button , SafeAnchor } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

let docs = [{ name: 'doc 1' }, { name: 'doc 2' }];

const AvailableDoctors = (props) => (
    props.doctorsList.length === 0 ? <Spinner animation={'border'} variant={'dark'} className={props.className} /> :<Table responsive bordered>
        <thead>
            <tr>
                <th>Doctor Name</th>
                <th>Channel</th>
            </tr>
        </thead>
        <tbody>
            {props.doctorsList.map(doctor => (
                <tr key={doctor.name}>
                    <td>
                        {doctor.name}
                    </td>
                    <td>
                        <Link to={`channel/${doctor.name}`} className={'btn btn-outline-dark btn-sm'}>Channel</Link>
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
);


//redux connet
const mapStateToProps = (state) => {
    return {
        doctorsList: state.userReducer.doctorsList
    }
}


export default connect(mapStateToProps) (AvailableDoctors);
