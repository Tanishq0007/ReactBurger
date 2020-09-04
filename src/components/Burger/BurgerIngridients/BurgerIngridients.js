import React from 'react';

import './burgerIngridients.css'

const burgerIngridients = (props) => {
    let ingridients = null;

    switch (props.type) {
        case('bread-bottom'):
            ingridients = <div className= 'BreadBottom'></div>;
            break;
        case('bread-top'):
            ingridients = (
                <div className='BreadTop'>
                    <div className='Seeds1'></div>
                    <div className='Seeds2'></div>
                </div>
            );
            break;
        case('meat'):
            ingridients = <div className='Meat' ></div>;
            break;
        case('cheese'):
            ingridients = <div className='Cheese' ></div>;
            break;
        case('bacon'):
            ingridients = <div className='Bacon' ></div>;
            break;
        case('salad'):
            ingridients = <div className='Salad' ></div>;
            break;
        default:
            ingridients = null;
    }
};

export default burgerIngridients;