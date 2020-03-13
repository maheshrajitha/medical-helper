import React from 'react';
import { Table , Spinner, Button , SafeAnchor } from 'react-bootstrap';
import { connect } from 'react-redux';

let docs = [{ name: 'doc 1' }, { name: 'doc 2' }];

const AvailableDoctors = (props) => (
    docs.length === 0 ? <Spinner animation={'border'} variant={'dark'} className={props.className} /> :<Table responsive bordered>
        <thead>
            <tr>
                <th>Doctor Name</th>
                <th>Channel</th>
            </tr>
        </thead>
        <tbody>
            {docs.map(doctor => (
                <tr key={doctor.name}>
                    <td>
                        {doctor.name}
                    </td>
                    <td>
                        <a href={'nbjhkj'} className={'btn btn-outline-dark btn-sm'}>Channel</a>
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


export default connect(mapStateToProps) (AvailableDoctors)
