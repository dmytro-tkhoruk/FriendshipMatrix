'use strict';

import React       from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from '../components/LoginForm.jsx';

import { login } from '../actions/auth.actions';

class LoginContainer extends React.Component {

    render() {
        const { handleLogin } = this.props;

        return (
            <LoginForm handleLogin={handleLogin} />
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
        handleLogin: bindActionCreators(login, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);