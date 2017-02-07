'use strict';

import React from 'react';
import Snackbar from 'material-ui/Snackbar';

class SnackbarView extends React.Component {

    render() {
        const {handleSetSnackBarMsg, showProgressBar, snackBarMsg} = this.props;

        return (
            <Snackbar
                open={Boolean(snackBarMsg)}
                message={showProgressBar ? "Waiting for server response" : snackBarMsg || ""}
                autoHideDuration={showProgressBar ? undefined : 3500}
                onRequestClose={() => {
                    if (snackBarMsg) handleSetSnackBarMsg("")
                }}
            />
        );
    }
}

export default SnackbarView;