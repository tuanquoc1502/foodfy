import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'

import { MdLogout } from 'react-icons/md'
import styles from './Auth.module.scss'

function LogoutMobile() {

    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className={styles.wapperLogoutMobile}>
                <div className={styles.logoutMobile}>
                    <div className={styles.title} onClick={() => logout()}>Logout</div>
                    <div className={styles.iconLogout}><MdLogout /></div>
                </div>
            </div>
        )
    );
}

export default LogoutMobile;