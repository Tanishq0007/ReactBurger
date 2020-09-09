import React from 'react';

import Aux from '../../HigerOrderComponent/Auxilliary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className = 'content'>
            {props.children}
        </main>
    </Aux>
);

export default layout;