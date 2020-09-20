import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './BurgerIngridients.module.css'

class BurgerIngridients extends Component {
    render () {
        let ingridients = null;

        switch (this.props.type) {
            case('bread-bottom'):
                ingridients = <div className={styles.BreadBottom}></div>;
                break;
            case('bread-top'):
                ingridients = (
                    <div className={styles.BreadTop}>
                        <div className={styles.Seeds1}></div>
                        <div className={styles.Seeds2}></div>
                    </div>
                );
                break;
            case('meat'):
                ingridients = <div className={styles.Meat} ></div>;
                break;
            case('cheese'):
                ingridients = <div className={styles.Cheese} ></div>;
                break;
            case('bacon'):
                ingridients = <div className={styles.Bacon} ></div>;
                break;
            case('salad'):
                ingridients = <div className={styles.Salad} ></div>;
                break;
            default:
                ingridients = null;
        }

        return ingridients;
    }
}

BurgerIngridients.propTypes = {
    type : PropTypes.string.isRequired
};

export default BurgerIngridients;