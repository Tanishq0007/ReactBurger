import React, {Component} from 'react';

import Aux from '../../HigerOrderComponent/Auxilliary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }
    
    render() {
        return (<Aux>
            <Toolbar />
            <SideDrawer  
                closed = { this.sideDrawerCloseHandler }
                open = { this.showSideDrawer }/>
            <main className = 'content'>
                {this.props.children}
            </main>
        </Aux>
        )}
}

export default Layout;