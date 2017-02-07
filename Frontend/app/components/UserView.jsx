'use strict';

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class UserView extends React.Component {

    handleClickAddFriendship(){
        const {currentUser, user, handleAddFriendship} = this.props;
        handleAddFriendship({currentUserId:currentUser._id, userId:user._id});
    }

    handleClickRemoveFriendship(){
        const {currentUser, user, handleRemoveFriendship} = this.props;
        handleRemoveFriendship({currentUserId:currentUser._id, userId:user._id});
    }

    render() {
        const {user, number} = this.props;
        const imgSrc= `./img/${user.gender}.png`;

        const oddClass = number%2==0?"odd":"";
        const className = "user "+oddClass;

        return (
            <div className={className}>
                <img src={imgSrc} className="profile-picture-small"/>
                <span className="user-name">{user.name}</span>
                {user.isFriend?
                    <RaisedButton
                        secondary={true}
                        label='UnFriend'
                        onClick={this.handleClickRemoveFriendship.bind(this)}
                        className ="friendship-button"
                    />:
                    <RaisedButton
                        primary={true}
                        label='Add Friend'
                        onClick={this.handleClickAddFriendship.bind(this)}
                        className ="friendship-button"
                    />}
            </div>
        );
    }
}

export default UserView;