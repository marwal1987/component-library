import React from 'react';
import classnames from 'classnames';

function Button({ size, bgColor, textColor, children, onClick, disabled }) {

    const buttonClasses = classnames(
      'font-bold py-2 px-4 rounded',
      `bg-${bgColor}`, 
      `text-${textColor}`,
      {
        'text-xs': size === 'xs',
        'text-sm': size === 'sm',
        'text-lg': size === 'lg',
        'text-xl': size === 'xl',
        'text-2xl': size === 'xxl',
      }
    
  );

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
