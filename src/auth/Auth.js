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
                <h4 className="auth-h4">An app to track those signficant moments of change and development in your Child's life.</h4>
            <Row>
                <Col  md="6">
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