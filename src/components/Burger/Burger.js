import React from 'react';

import styles from './Burger.module.css';
import BurgerIngridients from './BurgerIngridients/BurgerIngridients';

const burger = (props) => {
    let transformedIngridients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map(( _, i) => {
            return <BurgerIngridients key={igKey + i} type={igKey} />;
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    if (transformedIngridients.length === 0) {
        transformedIngridients = <p>Please Start Adding Ingridients!</p>;
    }
    return ( 
        <div className={styles.Burger}>
            <BurgerIngridients type="bread-top" />
            {transformedIngridients}
            <BurgerIngridients type="bread-bottom" />
        </div>
    );
};

export default burger;