'use strict';

import React       from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { registerUser } from '../actions/users.actions';
import RegisterForm from '../components/RegisterForm.jsx';

class RegisterContainer extends React.Component {

    render() {
        return (
            <RegisterForm {...this.props}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleRegisterUser: bindActionCreators(registerUser, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);