import React from 'react';

import Aux from '../../../HigerOrderComponent/Auxilliary';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
    return <li key={igKey}> 
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout ?</p>
            <p>The Total Amount is {props.price.toFixed(2)}</p>
        </Aux>
    )
};

export default orderSummary;