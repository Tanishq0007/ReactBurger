import React from 'react';

import './Burger.css';
import BurgerIngridients from './BurgerIngridients/BurgerIngridients';

const burger = (props) => {
    const transformedIngridients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map(( _, i) => {
            return <BurgerIngridients key={igKey + i} type={igKey} />;
        });
    });
    return ( 
        <div className='Burger'>
            <BurgerIngridients type="bread-top" />
            {transformedIngridients}
            <BurgerIngridients type="bread-bottom" />
        </div>
    );
};

export default burger;