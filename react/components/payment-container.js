import React, {Component} from 'react';
import StepSignIn from './payment-container/step-sign-in';
import StepConfirmUser from './payment-container/step-confirm-user';
import StepMakePayment from './payment-container/step-make-payment';
import * as actions from '../redux/action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

@connect(store => ({
    
}))
export default class PaymentContainer extends Component {
    constructor(props) {
        super(props);
        this.actions = bindActionCreators(actions, this.props.dispatch);
        this.actions.checkCookie();
    }
    render() {
        return (
            <div>
                <StepSignIn/>
                <StepConfirmUser/>
                <StepMakePayment/>
            </div>
        );
    }
}