import React, { useEffect, useState } from 'react';
import styles from './HeaderTemplate.module.scss';
import cx from 'classnames';
import Router from 'next/router';
import Link from 'next/link';



const HeaderTemplate = () => {

    const [isLoadPage, setIsLoadPage] = useState(false);

useEffect(() => {
    setIsLoadPage(true);
},[])

    return (
        <div className={styles.HeaderTemplate}>
            <Link href={'/'}><span className={cx(styles.HeaderTemplate__link,{[styles.active]:isLoadPage && Router.pathname === '/'})}>Bitcoin</span></Link>
            <Link href={'/ethereum'}><span className={cx(styles.HeaderTemplate__link,{[styles.active]:isLoadPage && Router.pathname === '/ethereum'})}>Ethereum</span></Link>
        </div>
    );
};

export default HeaderTemplate;