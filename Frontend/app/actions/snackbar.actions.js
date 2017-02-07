import * as snackbarConstants from '../constants/snackbar.constants';

export const setSnackBarMsg = (message = "") => ({
    type: snackbarConstants.SET_SNACKBAR_MSG,
    message: message
});