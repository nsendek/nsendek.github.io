import React from 'react';
import classNames from 'classnames';

import styles from "./styles.scss";

const ViewContainer = (props) => {
  return (
    <div className={classNames(styles.viewContainer, props.className)}>
      {props.children}
    </div>
  )
}

export default ViewContainer;
