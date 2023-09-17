import React from 'react';
import cx from 'clsx';
import './style.css';


const styles = {
  variant: (
    variant
  ) => {
    if (variant === 'primary') {
      return 'primary';
    }
    if (variant === 'secondary') {
      return 'secondary';
    }
    return 'primary';
  },
  size: type => {
    if (type === 'lg') return 'btn-lg';
    if (type === 'md') return 'btn-md';
    if (type === 'sm') return 'btn-sm';
    if (type === 'xs') return 'btn-xs';
  },
};

const Button = (
  (props) => {
    const {
      variant,
      size,
      className,
      startIcon,
      onClick,
      children,
      type,
      ...rest
    } = props;
    return (
      <button
        {...rest}
        type={props.type ? props.type : 'button'}
        onClick={props.onClick}
        className={cx(
          'rounded-lg',
          'z-50',
          styles.variant(variant),
          styles.size(size),
          className
        )}
      >
        <>
        {startIcon && (
            <span
              className='mr-4 relative top-[calc(50%-22.75px)]'
            >
              {startIcon}
            </span>
          )}
          {children}
        </>
      </button>
    );
  }
);

export default Button;