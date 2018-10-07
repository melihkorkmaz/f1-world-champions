import React from 'react';
import PropTypes from 'prop-types';

import './header.component.scss';
import logo from '../../../assets/img/f1-logo.png';

const Header = ({ children }) => (
    <header className="header">
        <div className="header__container">
            <img className="header__logo" src={logo}/>
            {children}
        </div>
    </header>
);

Header.propTypes = {
    children: PropTypes.any
};

export default Header;
