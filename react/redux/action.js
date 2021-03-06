import axios from 'axios';

export function typeInRegistration(payload) {
    return {
        type: 'TYPE_IN_REGISTRATION',
        payload
    }
}


export function typeInSignIn(payload) {
    return {
        type: 'TYPE_IN_SIGN_IN',
        payload
    }
}
 

export function createAccount(registration) {
    return {
        type: 'CREATE_ACCOUNT',
        payload: axios.post(`${process.env.HOST}auth/local/create-account`, registration)
    }
}


export function checkCookie() {
    return {
        type: 'CHECK_COOKIE'
    }
}


export function signOut() {
    return {
        type: 'SIGN_OUT'
    }
}


export function signUp() {
    return {
        type: 'SIGN_UP'
    }
}


export function signIn() {
    return {
        type: 'SIGN_IN'
    }
}


export function clearRegistration() {
    return {
        type: 'CLEAR_REGISTRATION'
    }
}


export function clearSignIn() {
    return {
        type: 'CLEAR_SIGN_IN'
    }
}


export function signInUser(signInCredentials) {
    return {
        type: 'SIGN_IN_USER',
        payload: axios.post(`${process.env.HOST}auth/local/sign-in`, signInCredentials)
    }
}


export function editAccount(user) {
    return {
        type: 'EDIT_ACCOUNT',
        payload: user
    }
}


export function cancelEditAccount() {
    return {
        type: 'CANCEL_EDIT_ACCOUNT'
    }
}


export function editUserAccount(registration, user) {
    return {
        type: 'EDIT_USER_ACCOUNT',
        payload: axios.post(`${process.env.HOST}auth/local/edit-account`, registration, {
            headers: {
                'Authorization': user.token
            }
        })
    }
}


export function selectPackage(value) {
    return {
        type: 'SELECT_PACKAGE',
        payload: value
    }
}


export function getPaymentSignature(paymentId, selectedPackage, user, country) {
    return {
        type: 'GET_PAYMENT_SIGNATURE',
        payload: axios.post(`${process.env.HOST}payment/signature`, {paymentId: paymentId, selectedPackage: selectedPackage, country}, {
                    headers: {
                        'Authorization': user.token
                    }
                })
    }
}


export function setPaymentId(paymentId) {
    return {
        type: 'SET_PAYMENT_ID',
        payload: paymentId
    }
}


export function changePassword() {
    return {
        type: 'CHANGE_PASSWORD'
    }
}


export function cancelChangePassword() {
    return {
        type: 'CANCEL_CHANGE_PASSWORD'
    }
}


export function changeUserPassword(registration, user) {
    return {
        type: 'CHANGE_USER_PASSWORD',
        payload: axios.post(`${process.env.HOST}auth/local/change-password`, registration, {
            headers: {
                'Authorization': user.token
            }
        })
    }
}


export function forgotPassword() {
    return {
        type: 'FORGOT_PASSWORD'
    }
}


export function cancelForgotPassword() {
    return {
        type: 'CANCEL_FORGOT_PASSWORD'
    }
}


export function forgotUserPassword(payload, user) {
    return {
        type: 'FORGOT_USER_PASSWORD',
        payload: axios.post(`${process.env.HOST}auth/local/forgot-password`, payload, {
            headers: {
                'Authorization': user.token
            }
        })
    }
}


export function resetPassword(token) {
    return {
        type: 'RESET_PASSWORD',
        payload: token
    }
}


export function resetUserPassword(registration) {
    return {
        type: 'RESET_USER_PASSWORD',
        payload: axios.post(`${process.env.HOST}auth/local/reset-password`, registration)
    }
}


export function getTransactions(user) {
    return {
        type: 'GET_TRANSACTIONS',
        payload: axios.get(`${process.env.HOST}my-account/transactions`, {
            headers: {
                'Authorization': user.token
            }
        })
    }
}


export function getActiveCustomers(user) {
    return {
        type: 'GET_ACTIVE_CUSTOMERS',
        payload: axios.get(`${process.env.HOST}boss/active-customers`, {
            headers: {
                'Authorization': user.token
            }
        })
    }
}


export function getLocation() {
    return {
        type: 'GET_LOCATION',
        payload: axios.get(`${process.env.HOST}json/location`)
    }
}