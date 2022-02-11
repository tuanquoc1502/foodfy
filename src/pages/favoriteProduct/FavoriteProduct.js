import styles from './FavoriteProduct.module.scss'
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer'
import clsx from 'clsx';
import Slider from 'react-slick';

import { listPopularDishes } from '../../services/listSliderPopularDishes'
import { servicesSliderList } from '../../services/servicesSliderList'
import { mainPizzaPhoto, mainPastaPhoto, mainBurgerPhoto, menuPizza, menuPasta, menuBurger } from '../../services/favoriteFood'

function FavoriteProduct() {

    let settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
        <>
            <div><Header /></div>

            <div>

                <div className={styles.backgroundSlider}>
                    <div className={styles.pageDescription}>
                        <div className={styles.title}>Top most popular and favorite dishes at Foodfy.</div>
                        <h3 className={styles.subTitle}>We pride ourselves on making real food from the best ingredients</h3>
                    </div>
                </div>

                <div className={styles.poplularDishes}>
                    <h1 className={styles.title}>Popular Dishes</h1>
                    <h3 className={styles.subTitle}>Try the delicious new dishes from our chef.</h3>
                    <Slider {...settings}>
                        {listPopularDishes.map(item => (
                            <div key={item.id} className={styles.itemProduct}>
                                <div className={styles.imgProduct}><img src={item.image}></img></div>

                                <div className={styles.nameProduct}>{item.name} </div>
                                <div className={styles.describeProduct}>{item.describe}</div>
                                <div className={styles.priceProduct}>$ {item.price}</div>
                                <div className={styles.orderProduct}>Add To Cart</div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className={clsx(styles.wapperServicesBox, 'grid wide')}>
                    {servicesSliderList.map(item => (

                        <div key={item.id} className={styles.servicesBox}>
                            <div><img src={item.image}></img></div>
                            <div className={styles.title}>{item.title}</div>
                        </div>
                    ))}
                </div>

                <div className={styles.backgroundBody}>
                    <div className={styles.bannerBox}>
                        <h1 className={styles.heading}>Book a Table</h1>
                        <span className={styles.subHeading}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto
                            doeiusmod tempor condorico consectetur adipiscing elitut aliquip.
                        </span>
                        <div className={styles.setTable}>Reservation</div>
                    </div>
                </div>

                <div className={clsx(styles.favoriteFood, 'grid wide')}>

                    <div className={styles.boxProductFavorite}>
                        <div className={clsx(styles.boxLeft, styles.mainPizzaPhoto)}>
                            <img src={mainPizzaPhoto}></img>
                        </div>

                        <div className={styles.boxRight}>
                            <h3 className={styles.heading}>Pizza</h3>
                            <ul>
                                {menuPizza.map(item => (
                                    <li key={item.id} className={styles.itemProduct}>
                                        <div className={styles.imgProduct}>
                                            <img src={item.image}></img>
                                        </div>
                                        <div className={styles.info}>
                                            <div className={styles.infoTop}>
                                                <span className={styles.nameProduct}>{item.name}</span>
                                                <span className={styles.priceProduct}>${item.price}</span>
                                            </div>
                                            <div className={styles.infoBottom}>
                                                {item.describe}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.boxProductFavorite}>
                        <div className={styles.boxRight}>
                            <h3 className={styles.heading}>Pasta</h3>
                            <ul>
                                {menuPasta.map(item => (
                                    <li key={item.id} className={styles.itemProduct}>
                                        <div className={styles.imgProduct}>
                                            <img src={item.image}></img>
                                        </div>
                                        <div className={styles.info}>
                                            <div className={styles.infoTop}>
                                                <span className={styles.nameProduct}>{item.name}</span>
                                                <span className={styles.priceProduct}>${item.price}</span>
                                            </div>
                                            <div className={styles.infoBottom}>
                                                {item.describe}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={clsx(styles.boxLeft, styles.mainPastaPhoto)}>
                            <img src={mainPastaPhoto}></img>
                        </div>
                    </div>


                    <div className={styles.boxProductFavorite}>
                        <div className={clsx(styles.boxLeft, styles.mainBurgerPhoto)}>
                            <img src={mainBurgerPhoto}></img>
                        </div>

                        <div className={styles.boxRight}>
                            <h3 className={styles.heading}>Pizza</h3>
                            <ul>
                                {menuBurger.map(item => (
                                    <li key={item.id} className={styles.itemProduct}>
                                        <div className={styles.imgProduct}>
                                            <img src={item.image}></img>
                                        </div>
                                        <div className={styles.info}>
                                            <div className={styles.infoTop}>
                                                <span className={styles.nameProduct}>{item.name}</span>
                                                <span className={styles.priceProduct}>${item.price}</span>
                                            </div>
                                            <div className={styles.infoBottom}>
                                                {item.describe}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

            <div><Footer /></div>
        </>
    );
}

export default FavoriteProduct;