'use strict';

import React       from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logout } from '../actions/auth.actions';
import { addFriendship, removeFriendship } from '../actions/users.actions';

import ProfileView from  '../components/ProfileView.jsx';
import UserListView from  '../components/UserListView.jsx';

class ProfileContainer extends React.Component {


    render() {
        const {currentUser, handleLogout} = this.props;
        const {usersList, handleAddFriendship, handleRemoveFriendship} = this.props;

        return (
            <div>
                <ProfileView currentUser={currentUser}
                             handleLogout={handleLogout}/>

                <UserListView currentUser={currentUser}
                              usersList={usersList}
                              handleAddFriendship={handleAddFriendship}
                              handleRemoveFriendship={handleRemoveFriendship} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.users.currentUser,
        usersList: state.users.usersList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleLogout: bindActionCreators(logout, dispatch),
        handleAddFriendship: bindActionCreators(addFriendship, dispatch),
        handleRemoveFriendship: bindActionCreators(removeFriendship, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);