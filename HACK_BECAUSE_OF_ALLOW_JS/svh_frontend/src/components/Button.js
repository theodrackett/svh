import React from 'react';
import PropTypes from 'prop-types';
const Button = ({ children, onClick, type = 'button', disabled = false, loading = false, className = '' }) => {
    return (<button type={type} onClick={onClick} disabled={disabled || loading} className={`btn ${className}`} // Custom classes can be passed via className prop
    >
      {loading ? 'Loading...' : children}
    </button>);
};
Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    className: PropTypes.string,
};
export default Button;
