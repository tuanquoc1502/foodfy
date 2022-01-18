import { memo } from "react"
import styles from './Footer.module.scss'
import clsx from "clsx"

/* Icon */
import { TiSocialPinterest, TiSocialDribbble, TiSocialTwitter, TiSocialFacebook } from 'react-icons/ti'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdOutgoingMail } from 'react-icons/md'
import { GiPositionMarker } from 'react-icons/gi'
import { ImArrowRight2 } from 'react-icons/im'

function Footer() {
    return (
        <div>
            <div className={styles.footerTop}>
                <div className='grid wide'>
                    <div className='row'>
                        <div className='col l-4 m-6 c-12'>
                            <div className={styles.topContent}>
                                <div className={styles.supplementaryPhoto}></div>
                                <h1 className={styles.describeTop}>A perfect blend of creativity, energy,
                                    communication, happiness and love.
                                    Let us arrange a smile for you.
                                </h1>
                                <h3 className={styles.describeBottom}>We are always ready to help 24/7.</h3>
                                <div className={styles.iconSocialNetwork}>
                                    <div className={styles.icon}><TiSocialFacebook /></div>
                                    <div className={styles.icon}><TiSocialPinterest /></div>
                                    <div className={styles.icon}><TiSocialDribbble /></div>
                                    <div className={styles.icon}><TiSocialTwitter /></div>
                                </div>
                            </div>
                        </div>
                        <div className='col l-3 m-6 c-12'>
                            <div className={styles.contact}>
                                <h1 className={styles.title}>Contact Us</h1>
                                <div className={styles.compartmentIcon}></div>
                                <div className={styles.contactInfo}>
                                    <div className={styles.icon}><BsFillTelephoneFill /></div>
                                    <div className={styles.info}>
                                        <span>0982 745 958</span>
                                        <span>0982 777 999</span>
                                    </div>
                                </div>
                                <div className={styles.contactInfo}>
                                    <div className={styles.icon}><MdOutgoingMail /></div>
                                    <div className={styles.info}>
                                        <span>c-food@gmail.com</span>
                                        <span>support@gmail.com</span>
                                    </div>
                                </div>
                                <div className={styles.contactInfo}>
                                    <div className={styles.icon}><GiPositionMarker /></div>
                                    <div className={styles.info}>
                                        <span>87/74 Phúc Lợi, Long Biên, Hà Nội</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col l-5 m-12 c-12'>
                            <div className={styles.hourFooter}>

                                <h1 className={styles.heading}>Opening Hours:</h1>
                                <div className={styles.operatingTime}>
                                    <span className={styles.day}>Sunday</span>
                                    <span className={styles.iconArrow}><ImArrowRight2 /></span>
                                    <span className={clsx(styles.time, styles.colorRedPrivate)}>Closeing Day</span>
                                </div>
                                <div className={styles.operatingTime}>
                                    <span className={styles.day}>Monday</span>
                                    <span className={styles.iconArrow}><ImArrowRight2 /></span>
                                    <span className={styles.time}>8AM - 10PM</span>
                                </div>
                                <div className={styles.operatingTime}>
                                    <span className={styles.day}>Tuesday</span>
                                    <span className={styles.iconArrow}><ImArrowRight2 /></span>
                                    <span className={styles.time}>8AM - 10PM</span>
                                </div>
                                <div className={styles.operatingTime}>
                                    <span className={styles.day}>Wednesday</span>
                                    <span className={styles.iconArrow}><ImArrowRight2 /></span>
                                    <span className={styles.time}>8AM - 10PM</span>
                                </div>
                                <div className={styles.operatingTime}>
                                    <span className={styles.day}>Thurday</span>
                                    <span className={styles.iconArrow}><ImArrowRight2 /></span>
                                    <span className={clsx(styles.time, styles.colorOrangePrivate)}>8AM -  12PM</span>
                                </div>
                                <div className={styles.operatingTime}>
                                    <span className={styles.day}>Friday</span>
                                    <span className={styles.iconArrow}><ImArrowRight2 /></span>
                                    <span className={styles.time}>8AM - 10PM</span>
                                </div>
                                <div className={styles.operatingTime}>
                                    <span className={styles.day}>Saturday</span>
                                    <span className={styles.iconArrow}><ImArrowRight2 /></span>
                                    <span className={styles.time}>8AM - 10PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerBootom}>
                <div className='grid wide'>
                    <div className={styles.wapper}>
                        <div>Copyright 2021. All Rights Reserved.</div>
                        <div>
                            <span className={styles.rules}>Terms - Conditions</span>
                            <span className={styles.privacyPolicy}>Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Footer)