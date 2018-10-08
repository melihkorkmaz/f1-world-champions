import React from 'react';
import PropTypes from 'prop-types';
import './with-loader.component.scss';

const renderLoader = () => (
    <div className="sk-fading-circle">
        <div className="sk-circle1 sk-circle"></div>
        <div className="sk-circle2 sk-circle"></div>
        <div className="sk-circle3 sk-circle"></div>
        <div className="sk-circle4 sk-circle"></div>
        <div className="sk-circle5 sk-circle"></div>
        <div className="sk-circle6 sk-circle"></div>
        <div className="sk-circle7 sk-circle"></div>
        <div className="sk-circle8 sk-circle"></div>
        <div className="sk-circle9 sk-circle"></div>
        <div className="sk-circle10 sk-circle"></div>
        <div className="sk-circle11 sk-circle"></div>
        <div className="sk-circle12 sk-circle"></div>
    </div>
);

const renderError = message => <div className="error">{message}</div>;

const WithLoader = ({ isLoading, hasError, errorMessage, children }) => {
    if (isLoading) {
        return renderLoader();
    }

    return hasError ? renderError(errorMessage) : children;
};

WithLoader.propTypes = {
    isLoading: PropTypes.bool,
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string,
    children: PropTypes.any.isRequired
};
export default WithLoader;
