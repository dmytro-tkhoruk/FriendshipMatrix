'use strict';

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class ProfileView extends React.Component {
    render() {
        const {currentUser, handleLogout} = this.props;
        const imgSrc= `./img/${currentUser.gender}.png`;

        return (
            <div className="profile">
                <img src={imgSrc} className="profile-picture-medium"/>
                <div className="current-user-name">{currentUser.name}</div>
                <RaisedButton
                    primary={true}
                    label='Logout'
                    onClick={handleLogout}
                    className ="logout-button"
                />
            </div>
        );
    }
}

export default ProfileView;