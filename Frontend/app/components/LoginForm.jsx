'use strict';

import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import {isEmailAddress} from "../utils/email.utils";

class LoginForm extends React.Component {
    constructor() {
        super();

        this.state={
            emailError: null,
            passwordError: null
        }
    }

    submitLogin() {
        const email = this.refs.emailField.getValue();
        const password = this.refs.passwordField.getValue();

        const isEmail = isEmailAddress(email);
        const isPassword = password.length>0;

        let newState = {emailError:null, passwordError:null};

        if (!isEmail){
            newState.emailError = "Email is not valid";
        }

        if (!isPassword){
            newState.passwordError = "Password could not be empty";
        }

        this.setState(newState);

        if (isEmail && isPassword){
            this.props.handleLogin({ email, password });
        }
    };

    render() {
        return (
            <div className="form-page">
                <img src="./img/friendship.png" />
                <form className="login-form">
                    <TextField
                        ref       = 'emailField'
                        hintText  = 'Enter your email'
                        type = "email"
                        errorText={this.state.emailError}
                    /><br/>

                    <TextField
                        ref       = 'passwordField'
                        hintText  = 'Enter password'
                        type = 'password'
                        errorText={this.state.passwordError}
                    /><br/>

                    <RaisedButton
                        primary={true}
                        label='Login'
                        onClick={this.submitLogin.bind(this)}
                        className ="login-button"
                    /> <br />

                    <Link
                        to="/register"
                        className="link"
                        onlyActiveOnIndex={true}>
                        or register
                    </Link>
                </form>
            </div>
        );
    }
}

export default LoginForm;