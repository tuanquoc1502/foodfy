import React from 'react';
import Slider from "react-slick";
import styles from './CategorySlider.module.scss'

import { categorySlider } from '../../services/categorySlider';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function CategorySlider() {

    let settings = {
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={styles.box}>
            <div className={styles.boxSlider}>
                <h3 className={styles.titleSlider}>What we have?</h3>
                <span className={styles.subTitleSlider}>Browse food category</span>
                <Slider {...settings}>
                    {categorySlider.map(item => (
                        <div className={styles.imgFoodItem} key={item.name}>
                            <div><img className={styles.imgFood} src={item.image}></img></div>
                            <div className={styles.nameCategory}>{item.name}</div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default CategorySlider;