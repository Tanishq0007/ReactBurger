import React, { Component } from 'react';

import Aux from '../../../HigerOrderComponent/Auxilliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[OrderSummary] WillingUpdate');
    }
    // ComponentDidUpdate()

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
        return <li key={igKey}> 
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
        });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with following Ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>The Total Price is <strong>{this.props.price.toFixed(2)}</strong> </p>
                <p>Continue to Checkout ?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled} >CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued} >CONTINUE</Button>
            </Aux>
        );
    }
}
export default OrderSummary;