import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

export default function Button (props) {
  const { label, onClick, disabled, className } = props

  return (
    <button type="button" onClick={onClick} className={`button ${className || ''}`} disabled={disabled}>
      {label}
    </button>
  )
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string
}
