import React from 'react';

import styles from './NavigationItems.module.css';
import NavigationItem from '../NavigationItems/NavigationItem/NaigationItem';

const navigationItems = () => (
    <ul className={styles.NavigatioItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;