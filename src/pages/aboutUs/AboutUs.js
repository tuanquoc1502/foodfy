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
                        <h1 className={styles.heading}>Bối cảnh thị trường</h1>
                        <span className={styles.title}>
                            Các ngân hàng đang chạy đua trong thời đại số, cùng với sự tham gia của các đơn vị Fintech
                            đã đưa Khách hàng vào vị trí trung tâm của chiến lược phát triển. Bên cạnh nhóm Khách hàng cá nhân,
                            Khách hàng Doanh nghiệp cũng là đối tượng mục tiêu trong cuộc đua giữa các ngân hàng tại thị trường Việt Nam. Các nhóm khách hàng doanh
                            nghiệp có những nhu cầu riêng và khá đặc thù. Tuy nhiên họ chưa được thấu hiểu cũng như cung cấp dịch vụ phù hợp với mong muốn.
                        </span>
                    </div>
                </div>

                <div className={styles.boxRight}>
                    <div className={styles.wapper}>
                        <div className={styles.boxItem}>
                            <div className={styles.boxItem1}>
                                <h1 className={styles.parameter}>{numberTransaction}%</h1>
                                <span className={styles.title}>Số lượng giao dịch qua kênh digital theo thống kê năm 2019</span>
                            </div>
                            <div className={styles.boxItem2}>
                                <h1 className={styles.parameter}>{numberTurnover}%</h1>
                                <span className={styles.title}>Doanh thu đến từ các sản phẩm và dịch vụ phi tín dụng</span>
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