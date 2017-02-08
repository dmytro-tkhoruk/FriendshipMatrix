'use strict';

import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

class LoaderView extends React.Component {

    render() {
        const {showLoader} = this.props;
        return <div className="loader">{showLoader?<CircularProgress size={60} thickness={7} />:null}</div>;
    }
}

export default LoaderView;