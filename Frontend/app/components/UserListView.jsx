'use strict';

import React from 'react';
import UserGroupView from './UserGroupView.jsx';

class UserListView extends React.Component {
    render() {
        const {usersList} = this.props;

        return (
            <div className="users-list">
                {
                    usersList.map((item, n)=>(
                        <UserGroupView {...this.props} group={item}/>
                    ))
                }
            </div>
        );
    }
}

export default UserListView;