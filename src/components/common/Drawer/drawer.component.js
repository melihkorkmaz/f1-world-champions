import React from 'react';
import PropTypes from 'prop-types';

import './drawer.component.scss';

const Drawer = ({ title, children, open, onClose }) => {
  const className = open ? 'drawer open' : 'drawer';
  return (
    <div className={className}>
        <div className="drawer__title-container">
            <span className="drawer__title">{title}</span>
            <span className="drawer__close-btn" onClick={onClose}>X</span>
        </div>
        <div className="drawer__body">
            { open ? children : null }
        </div>
    </div>
  );
};

Drawer.propTypes = {
    title: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.any
};

export default Drawer;
