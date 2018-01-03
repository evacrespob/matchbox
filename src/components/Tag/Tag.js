import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { UnstyledLink } from '../UnstyledLink';

import styles from './Tag.module.scss';

class Tag extends Component {
  static displayName = 'Tag';

  static propTypes = {
    /**
     * 'orange' | 'blue' | 'yellow' | 'red'
     */
    color: PropTypes.oneOf(['orange', 'blue', 'yellow', 'red']),
    /**
     * Close button is hidden unless this is provided
     */
    onRemove: PropTypes.func,
    /**
     * Tag content
     */
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  render() {
    const {
      color,
      children,
      onRemove,
      className,
      ...rest
    } = this.props;

    const tagClasses = classnames(
      styles.Tag,
      onRemove && styles.hasRemove,
      color && styles[color],
      className
    );

    const closeMarkup = onRemove
      ? <UnstyledLink
          className={styles.Close}
          onClick={onRemove}>
          <Icon name='Close' size={16}/>
        </UnstyledLink>
      : null;

    return (
      <div className={tagClasses} {...rest}>
        <div className={styles.Content}>{ children }</div>
        { closeMarkup }
      </div>
    );
  }
}


export default Tag;
