export default function firebaseErrorHandler(error) {

    const errorCode = error.code;
    const errorMessage = error.message;
    var msg = 'Something went wrong. Please try again later.';

    console.log('Error code: ' + errorCode)
    console.log('Error message: ' + errorMessage)

    switch(errorCode) {

        case 'auth/email-already-in-use':
            msg = 'The email address is already in use by another account.';
            alert(msg)
            break;

        case 'auth/invalid-email':
            msg = 'The email address is invalid.';
            alert(msg)
            break;

        case 'auth/user-not-found':
            msg = 'User not found.';
            alert(msg)
            break;

        case 'auth/wrong-password':
            msg = 'The password is invalid';
            alert(msg)
            break;

        case 'auth/user-disabled':
            // Code
            break;

        case 'auth/too-many-requests':
            // Code
            break;
        case 'undefined':
            // Code
            break;
    }
    return msg;
}