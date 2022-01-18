import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { FaUser } from 'react-icons/fa'
import styles from './Auth.module.scss'

function Login() {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <div className={styles.login} onClick={() => loginWithRedirect()}>
                <FaUser />
                <div className={styles.title}>Login</div>
            </div>
        )
    );
}

export default Login;