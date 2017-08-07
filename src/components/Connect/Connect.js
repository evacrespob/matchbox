import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Connect.module.scss';
import classnames from 'classnames';

class Connect extends Component {
  static propTypes = {
    left: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    right: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  render() {
    const {
      left,
      right,
      children
    } = this.props;

    const leftMarkup = left
      ? <div className={styles.Left}>{ left }</div>
      : null;

    const rightMarkup = right
      ? <div className={styles.Right}>{ right }</div>
      : null;

    const primaryClasses = classnames(
      styles.Primary,
      left && styles.hasLeft,
      right && styles.hasRight,
    );

    return (
      <div className={styles.Connect}>
        { leftMarkup }
        <div className={primaryClasses}>{ children }</div>
        { rightMarkup }
      </div>
    );
  }
};

export default Connect;