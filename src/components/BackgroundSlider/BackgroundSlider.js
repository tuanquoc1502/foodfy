import React from 'react';
import styles from './BackgroundSlider.module.scss'
import { RiShoppingBasketLine } from 'react-icons/ri'
import { Link } from "react-router-dom"

function BackgroundSlider() {

        const handleOderNow = () => {
            document.documentElement.scrollTop = 900
        }

        return (
            <div className={styles.specialProduct}>
                <div className={styles.waveBackground}></div>
                <div className={styles.contentSlider}>
                    <h1 className={styles.title}>Good food choices are good investments.</h1>
                    <span className={styles.subtitles}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam et purus a odio finibus bibendum amet leo.</span>
                    <Link to="/" className={styles.textDecoration}>
                        <div className={styles.orderBtn} onClick={handleOderNow}>
                            <div>Order now</div>
                            <div className={styles.iconCartOder}><RiShoppingBasketLine /></div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }

export default BackgroundSlider;