'use strict';

import React       from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { setSnackBarMsg } from '../actions/snackbar.actions';


import SnackbarView from "../components/SnackbarView.jsx";
import ProfileContainer from "./Profile.container.jsx";
import LoginContainer from "./Login.container.jsx";

import '../assets/styles.less';

injectTapEventPlugin(); // To enable tap-event in Material-ui

class MainContainer extends React.Component {

    render() {
        const {isAuthorized} = this.props;
        const hasChildren = Boolean(this.props.children);
        const content =isAuthorized?<ProfileContainer />:<LoginContainer />;

        return (
            <div>
                <SnackbarView {...this.props}/>
                {hasChildren?this.props.children:content}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuthorized: state.auth.isAuthorized,
        showProgressBar: state.network.showProgressBar,
        snackBarMsg: state.snackbar.snackBarMsg
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleSetSnackBarMsg: bindActionCreators(setSnackBarMsg, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContainer));