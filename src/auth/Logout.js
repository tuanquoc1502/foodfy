import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'

import { MdLogout } from 'react-icons/md'
import { MdSwitchAccount } from 'react-icons/md'
import styles from './Auth.module.scss'

function Logout() {

    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className={styles.wapper}>
                <div className={styles.myAccount}>
                    <div><MdSwitchAccount /></div>
                    <div>MyAccount</div>
                </div>
                <div className={styles.logout}>
                    <div className={styles.iconLogout}><MdLogout /></div>
                    <div className={styles.title} onClick={() => logout()}>Logout</div>
                </div>
            </div>
        )
    );
}

export default Logout;