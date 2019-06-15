import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
    <span className="accessory-btn">
        <button id={props.id}
                data-ga={`ButtonClick|${props.label}`}
                className={`button ${props.className} ${props.isPrimary ? 'primary' : 'secondary' }`}
                disabled={props.disabled}
                onClick={() => props.handleAction()}>
            {props.label}
        </button>
    </span>
);

export const buttonPropTypes = {
    className: PropTypes.string,
    handleAction: PropTypes.func.isRequired,
    label: PropTypes.string,
    id: PropTypes.string,
    isPrimary: PropTypes.bool,
    disabled: PropTypes.bool
};

Button.propTypes = buttonPropTypes;

export default Button;
