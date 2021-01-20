import React from 'react';
import styles from './Schedule.module.scss';

const Schedule = ({ cryptoCuracy, stateName, ethereum }) => {


    const dots = (name) => {
        const arr =  cryptoCuracy.map((data, i) => {
            const y = (Math.floor(data[name] / (ethereum ? 2 : 60)));
            return (
                <span
                    key={i}
                    style={{ transform: `translate(0px, -${y}px)` }}
                    className={styles.element}
                >
                </span>
            )
        });
        return arr;
    }


    return (
        <div className={styles.Schedule}>
            {
                stateName === 'open' || stateName === 'all' ? (
                    <div className={styles.Schedule__open}>
                        {
                            dots('open')
                        }
                    </div>
                ) : null
            }

            {
                stateName === 'high' || stateName === 'all' ? (
                    <div className={styles.Schedule__high}>
                        {
                            dots('high')
                        }
                    </div>
                ) : null
            }

            {
                stateName === 'low' || stateName === 'all' ? (
                    <div className={styles.Schedule__low}>
                        {
                             dots('low')
                        }
                    </div>
                ) : null
            }

            {
                stateName === 'close' || stateName === 'all' ? (
                    <div className={styles.Schedule__close}>
                        {
                            dots('close')
                        }
                    </div>
                ) : null
            }
        </div>
    );
};

export default Schedule;
