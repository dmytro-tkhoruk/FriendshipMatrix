'use strict';

import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import {isEmailAddress} from "../utils/email.utils";

class RegisterForm extends React.Component {
    constructor() {
        super();

        this.state={
            gender: "male",
            nameError: null,
            emailError: null,
            passwordError: null,
            confirmPasswordError: null
        }
    }

    submitRegister() {
        const name = this.refs.nameField.getValue();
        const email = this.refs.emailField.getValue();
        const password = this.refs.passwordField.getValue();
        const confirmPassword = this.refs.confirmPasswordField.getValue();

        const isName = name.length>0;
        const isEmail = isEmailAddress(email);
        const isPassword = password.length>0;
        const isConfirm = password==confirmPassword;

        let newState = {
            ...this.state,
            nameError: null,
            emailError:null,
            passwordError:null,
            confirmPasswordError:null
        };

        if (!isName){
            newState.nameError = "Are you Putin? Enter your name, please";
        }

        if (!isEmail){
            newState.emailError = "Email is not valid";
        }

        if (!isPassword){
            newState.passwordError = "Password could not be empty";
        }

        if (!isConfirm){
            newState.confirmPasswordError = "Passwords are not matching";
        }

        this.setState(newState);

        if (isName && isEmail && isPassword && isConfirm){
            this.props.handleRegisterUser({ name, email, password, gender: this.state.gender});
        }
    };

    handleChangeSex(event, index, value){
        this.setState({...this.state, gender:value});
    }

    render() {
        const imgSrc= `./img/${this.state.gender}.png`;

        return (
            <div className="form-page">
                <img src={imgSrc} className="profile-picture-big"/>
                <form className="register-form">
                    <SelectField
                        floatingLabelText="Choose your gender"
                        value={this.state.gender}
                        onChange={this.handleChangeSex.bind(this)}
                    >
                        <MenuItem value={"male"} primaryText="Male" />
                        <MenuItem value={"female"} primaryText="Female" />
                    </SelectField><br/>

                    <TextField
                        ref       = 'nameField'
                        hintText  = 'Enter your name'
                        type = "text"
                        errorText={this.state.nameError}
                    /><br/><br/>

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

                    <TextField
                        ref       = 'confirmPasswordField'
                        hintText  = 'Confirm password'
                        type = 'password'
                        errorText={this.state.confirmPasswordError}
                    /><br/>

                    <RaisedButton
                        primary={true}
                        label='Register'
                        onClick={this.submitRegister.bind(this)}
                        className ="register-button"
                    /><br/>

                    <Link
                        to="/"
                        className="link"
                        onlyActiveOnIndex={true}>
                        back to login
                    </Link>
                </form>
            </div>
        );
    }
}

export default RegisterForm;