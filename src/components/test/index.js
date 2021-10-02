import React from 'react';
import styles from './index.css';
console.log({styles})
const Test = ({}) => {
    return (
        <div className={styles.mainText}>
            Hello World
        </div>
    );
};

Test.propTypes = {

};

export default Test;
