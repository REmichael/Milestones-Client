import React from 'react';
import Signup from './Signup';
import Login from './Login';
import './Auth.css'
import {
    Container,
    Row,
    Col
} from 'reactstrap';

const styles = {
    h1: {
        fontFamily: 'Itty',
    } 
}

const Auth = (props) => {
    return (
        <Container className="auth-container">
                <h1 className="auth-h1">MILESTONES</h1>
            <Row className="auth-row1">
                <Col md="6">
                    <Signup setToken={props.setToken} />
                </Col>
                <Col className="login-col" md="6">
                    <Login setToken={props.setToken} />
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;