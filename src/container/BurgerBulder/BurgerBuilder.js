import React, { Component } from 'react';

import Aux from '../../HigerOrderComponent/Auxilliary';

class BurgerBuilder extends Component {
    render () {
        return (
            <Aux>
                <div>Burger</div>
                <div>Build Control</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;