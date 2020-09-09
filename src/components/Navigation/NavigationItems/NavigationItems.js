import React from 'react';

import './NavigationItems.css'
import NavigationItem from '../NavigationItems/NavigationItem/NaigationItem'

const navigationItems = () => (
    <ul className='NavigatioItems'>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;