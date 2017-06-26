import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';

import styles from './Banner.module.scss';
import { buttonFrom } from '../Button';

const actionOverrides = { outline: true };

const IconSection = ({ status }) => {
  if (status === 'default') {
    return null;
  }

  const icons = {
    success: 'Check',
    info: 'InfoOutline',
    warning: 'Warning',
    danger: 'Error'
  };

  const iconClasses = classnames(
    styles.Icon,
    status && styles[`${status}Icon`]
  );

  return (
    <div className={styles.IconWrapper}>
      <Icon name={icons[status]} size={27} className={iconClasses} />
    </div>
  );
};

class Banner extends Component {
  render() {
    const {
      children,
      title,
      status = 'default',

      // TODO props below
      onDismiss,
      action,
      fixed,
      autoDismiss,
    } = this.props;

    const titleMarkup = title
      ? <h5 className={styles.Title}>{ title }</h5>
      : null;

    const actionMarkup = action
      ? <div className={styles.Actions}>{ buttonFrom(action, actionOverrides) }</div>
      : null;

    const bannerStyles = classnames(
      styles.Banner,
      styles[`${status}`],
      fixed && styles.fixed
    );

    return (
      <div className={bannerStyles}>
        <IconSection status={status} />
        <div className={styles.Content}>
          { titleMarkup }
          { children }
          { actionMarkup }
        </div>
      </div>
    );
  }
};

Banner.propTypes = {
  title: PropTypes.string,
  status: PropTypes.oneOf(['info', 'warning', 'success', 'danger', 'default']),

  fixed: PropTypes.bool,
  onDismiss: PropTypes.func,
  autoDismiss: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  action: PropTypes.shape({
    content: PropTypes.string.isRequired
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

export default Banner;
