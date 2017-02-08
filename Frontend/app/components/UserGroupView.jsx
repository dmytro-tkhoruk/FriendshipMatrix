'use strict';

import React from 'react';
import UserView from './UserView.jsx';

class UserGroupView extends React.Component {
    render() {
        const {group} = this.props;

        return (
            <div className="user-group">
                <div className="group-name">{group.groupName}</div>
                {
                    group.users.map((item, n)=>(
                        <UserView {...this.props} key={n} user={item} number={n}/>
                    ))
                }
            </div>
        );
    }
}

export default UserGroupView;