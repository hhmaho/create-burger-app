import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../logo/Logo'
import NavigationItems from '../navigationItems/NavigationItems'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo />
        <nav><NavigationItems/></nav>
    </header>);

export default toolbar;