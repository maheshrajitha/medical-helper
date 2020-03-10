import React from 'react';
import { Container, Table, Dropdown, Badge } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import { login } from '../store/actions/user.action';
import { connect } from 'react-redux';

let channellings = [
    { date: '2020/02/29', name: 'Mahesh Rajitha Bandara', symtams: ['Cold', 'Headaches'],time : '04.00 PM' },
    { date: '2020/02/29', name: 'Mahesh Rajitha Bandara', symtams: 'Cold',time: '05.00 PM' },
    { date: '2020/02/29', name: 'Mahesh Rajitha Bandara', symtams: ['Cold', 'Headaches'] , time:'06.00 PM' },
    
]
class MyChannellings extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
    }
    

    paginate = () => {
        let dropDownItem = [];
        for (let i = 0; i < channellings.length / 10; i++){
            dropDownItem.push(
                <Dropdown.Item key={i}>
                    {i}
                </Dropdown.Item>
            );
        }
        return dropDownItem;
    }
    render() {
        return (
            <Container fluid>
                <div className={'row mb-5'}>
                    <div className={'col-md'}>
                        <Dropdown>
                            <Dropdown.Toggle size={'sm'} variant={'primary'}>Pages</Dropdown.Toggle>
                            <DropdownMenu>
                                {this.paginate()}
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Symtams</th>
                        </tr>
                    </thead>
                    <tbody>
                        {channellings.map(c => {
                            return (
                                <tr key={c.time}>
                                    <td>{c.date}</td>
                                    <td>{c.name}</td>
                                    <td>
                                        <Badge variant={'info'}>
                                            {c.time}
                                        </Badge>
                                    </td>
                                    <td>
                                        {c.symtams.length < 0 ? c.symtams.map(s => {
                                            return (
                                                s
                                            );
                                        }):c.symtams}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.userReducer.loggedUser
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        userLogin : user=> dispatch(login(user)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (MyChannellings);