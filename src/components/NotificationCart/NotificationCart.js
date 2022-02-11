import styles from './NotificationCart.module.scss'
import { BsCheck2 } from 'react-icons/bs'
import { GrFormClose } from 'react-icons/gr'
import { useState } from 'react'

function NotificationCart() {

    const handleOffNotification = () => {
        
    }

    return (
        <>
             <div className={styles.NotificationCart}>
                    <div className={styles.iconNotification}><BsCheck2 /></div>
                    <div className={styles.message}>
                        <h2>Success!</h2>
                        <span>The product has been added to cart</span>
                    </div>
                    <div className={styles.iconOffNotification} onClick={handleOffNotification}>
                        <GrFormClose />
                    </div>
                </div>
            
        </>
    );
}

export default NotificationCart;