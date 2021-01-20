import React from 'react';
import styles from './select.module.scss';
import cx from 'classnames';

const Select = ({ select, handlerSelect }) => {
    return (
        <div className={styles.Select}>
            {
                select.map((data) => {
                    return (
                        <span
                            onClick={() => handlerSelect(data.name)}
                            className={cx(styles.Select__button, { [styles.active]: data.active })}
                            key={data.id}>{data.name}
                        </span>
                    )
                })
            }
        </div>
    );
};

export default Select;