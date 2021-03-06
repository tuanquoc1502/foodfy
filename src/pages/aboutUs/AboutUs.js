import { useState, useEffect } from 'react'
import React from 'react';
import styles from './AboutUs.module.scss'

import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer'
import clsx from 'clsx';
import { BsCheckLg } from 'react-icons/bs'
import image1 from '../../assets/images/ImgAboutUs/1.png'
import image2 from '../../assets/images/ImgAboutUs/2.png'

function AboutUs() {
    const [scrollMarketcontext, setScrollMarketContext] = useState(false)
    const [numberTransaction, setNumberTransaction] = useState(0) 
    const [numberTurnover, setNumberTurnover] = useState(0)

    // Handle Scroll
    useEffect(() => {

        const handleScroll = () => {
            setScrollMarketContext(window.scrollY > 1600)
        }
        
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    // Handle number of transactions over
    useEffect(() => {

        if (scrollMarketcontext) {
            const time = numberTransaction < 19 && setInterval(() => {
                setNumberTransaction(prev => prev + 1)
            }, 35)
            return () => clearInterval(time)
        }

    }, [scrollMarketcontext, numberTransaction])

    // Handle amount of revenue
    useEffect(() => {

        if (scrollMarketcontext) {
            const times = numberTurnover < 60 && setInterval(() => {
                setNumberTurnover(prev => prev + 1)
            }, 10)
            return () => clearInterval(times)
        }

    }, [scrollMarketcontext, numberTurnover])

    return (
        <div className={styles.aboutUs}>
            <Header />
            <div className={styles.backgroundSlider}>
                <div className={styles.pageDescription}>
                    <h1 className={styles.title}>Fresh produce daily by dedicated bakers.</h1>
                    <h3 className={styles.subTitle}>Food for your soul</h3>
                </div>
            </div>

            <div className={clsx(styles.boxContent, 'grid wide')}>
                <div className={styles.boxLeft}><img src={image1}></img></div>
                <div className={styles.boxRight}>
                    <h1 className={styles.heading}>We pride ourselves on making real food from the best ingredients.</h1>
                    <h3 className={styles.subHeading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</h3>
                    <div className={styles.btnInformation}>Learn More</div>
                </div>
            </div>

            <div className={clsx(styles.boxContent2, 'grid wide')}>
                <div className={styles.boxRight}>
                    <h1 className={styles.heading}>We make everything by hand with the best possible ingredients.</h1>
                    <h3 className={styles.subHeading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h3>
                    <ul className={styles.listAttention}>
                        <li><span><BsCheckLg /></span> <span>Etiam sed dolor ac diam volutpat.</span></li>
                        <li><span><BsCheckLg /></span><span>Erat volutpat aliquet imperdiet.</span></li>
                        <li><span><BsCheckLg /></span><span>Purus a odio finibus bibendum.</span></li>
                    </ul>
                    <div className={styles.btnInformation}>Learn More</div>
                </div>
                <div className={styles.boxLeft}><img src={image2}></img></div>
            </div>


            {/* Market context */}
            <div className={styles.marketContext}>

                <div className={styles.boxLeft}>
                    <div className={styles.wapper}>
                        <h1 className={styles.heading}>B???i c???nh th??? tr?????ng</h1>
                        <span className={styles.title}>
                            C??c ng??n h??ng ??ang ch???y ??ua trong th???i ?????i s???, c??ng v???i s??? tham gia c???a c??c ????n v??? Fintech
                            ???? ????a Kh??ch h??ng v??o v??? tr?? trung t??m c???a chi???n l?????c ph??t tri???n. B??n c???nh nh??m Kh??ch h??ng c?? nh??n,
                            Kh??ch h??ng Doanh nghi???p c??ng l?? ?????i t?????ng m???c ti??u trong cu???c ??ua gi???a c??c ng??n h??ng t???i th??? tr?????ng Vi???t Nam. C??c nh??m kh??ch h??ng doanh
                            nghi???p c?? nh???ng nhu c???u ri??ng v?? kh?? ?????c th??. Tuy nhi??n h??? ch??a ???????c th???u hi???u c??ng nh?? cung c???p d???ch v??? ph?? h???p v???i mong mu???n.
                        </span>
                    </div>
                </div>

                <div className={styles.boxRight}>
                    <div className={styles.wapper}>
                        <div className={styles.boxItem}>
                            <div className={styles.boxItem1}>
                                <h1 className={styles.parameter}>{numberTransaction}%</h1>
                                <span className={styles.title}>S??? l?????ng giao d???ch qua k??nh digital theo th???ng k?? n??m 2019</span>
                            </div>
                            <div className={styles.boxItem2}>
                                <h1 className={styles.parameter}>{numberTurnover}%</h1>
                                <span className={styles.title}>Doanh thu ?????n t??? c??c s???n ph???m v?? d???ch v??? phi t??n d???ng</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}

export default AboutUs;