import React from 'react';

import Aux from '../../HigerOrderComponent/Auxilliary';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <div >Toolbar, Sidebar, Backdrop</div>
        <main className = 'content'>
            {props.children}
        </main>
    </Aux>
);

export default layout;