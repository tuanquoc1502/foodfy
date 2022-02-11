import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../store";
import clsx from "clsx";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import BackgroundSlider from "../../components/BackgroundSlider/BackgroundSlider";
import styles from './ShowProductById.module.scss'

import { MdAddShoppingCart } from 'react-icons/md'
import { AiFillStar, AiOutlineTags } from 'react-icons/ai'
import { BiPlus, BiMinus, BiCalendarCheck } from 'react-icons/bi'
import { FcShipped } from 'react-icons/fc'

function ShowProductById() {


    const [data] = useStore()
    const { id } = useParams();

    const product = data.find(food => food.id.toString() === id)
    const total = product.price;

    const [quantily, setQuantily] = useState(1)
    const [price, setPrice] = useState(total)

    const prevQuantily = useRef()

    useEffect(() => {
        prevQuantily.current = quantily
    }, [quantily])

    const btnIncreaseProduct = () => {
        setQuantily(prev => prev + 1)
        setPrice(prev => prev + total)
    }

    const btnReductionProduct = () => {
        if (quantily > 1) {
            setQuantily(prev => prev - 1)
            setPrice(prev => prev - total)
        }
    }

    const handleAddCart = () => {
        
    }

    // Process the first letter of the output information
    const outputInformation = product.id.toString().charAt(0).toUpperCase() + product.id.toString().slice(1)

    return (
        <div>
            <Header />
            <BackgroundSlider />
            <div className={'grid wide'}>
                <div className={clsx(styles.wapper)}>

                    <div className={styles.leftProduct}>
                        <img className={styles.imgProduct} src={product.img}></img>
                    </div>

                    <div className={styles.rightProduct}>

                        <h1 className={styles.nameProduct}>{product.name}</h1>

                        <div className={styles.starIcon}>

                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <span className={styles.evaluate}>0 Customer Reviews</span>
                        </div>

                        <div className={styles.price}>${price}</div>

                        <div className={styles.origin}>
                            <span className={styles.country}>Country:</span>
                            <p>{product.country}</p>
                        </div>

                        <div className={styles.eatOut}>{outputInformation}</div>
                        <h1 className={styles.optionsTitle}>Offers for you</h1>

                        <ul className={styles.options}>
                            <li>Buy 2 get 15 percent off</li>
                            <li>Buy 3 get 25 percent off</li>
                            <li>Buy 5 get 50 percent off</li>
                        </ul>

                        <div className={styles.order}>
                            <div className={styles.btnPrev} onClick={btnReductionProduct}>
                                <BiMinus />
                            </div>
                            <div className={styles.quantily}>{quantily}</div>
                            <div className={styles.btnNext} onClick={btnIncreaseProduct}>
                                <BiPlus />
                            </div>
                            <div className={styles.addToCard} onClick={handleAddCart}>
                                <MdAddShoppingCart className={styles.cartIcon} />
                                <span>ADD TO CART</span>
                            </div>
                        </div>

                        <div className={styles.detailCommits}>
                            <div className={styles.detailCommitsIcon}><FcShipped />Free global shipping on all orders</div>
                            <div className={styles.detailCommitsIcon}><BiCalendarCheck />2 hours easy returns if you change your mind</div>
                            <div className={styles.detailCommitsIcon}><AiOutlineTags />Order before noon for same day dispatch</div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ShowProductById;