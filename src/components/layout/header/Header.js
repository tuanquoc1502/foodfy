import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"
import { memo } from 'react'

import { HiShoppingCart } from 'react-icons/hi'
import { IoIosArrowUp } from 'react-icons/io'
import { AiFillDelete } from 'react-icons/ai'

import styles from './Header.module.scss'
import clsx from 'clsx'
import { useStore2 } from "../../../store"
import Login from "../../../auth/Login"
import Logout from '../../../auth/Logout'
import { useAuth0 } from '@auth0/auth0-react'
import BackgroundSlider from "../../BackgroundSlider/BackgroundSlider"

function Header() {

    const [cart, setCart] = useStore2()
    const [numberCart, setNumberCart] = useState([])

    const [showGoToTop, setGoToTop] = useState(false)
    const [backGroundHeader, setBackgroundHeader] = useState(false)

    const { user, isAuthenticated } = useAuth0();
    const { isLoading } = useAuth0();

    useEffect(() => {

        const handleScroll = () => {
            setGoToTop(window.scrollY > 200)
            setBackgroundHeader(window.scrollY > 90)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleBack = () => {
        document.documentElement.scrollTop = 0
    }

    const handleDelete = (id) => {
        let itemCart = cart.filter(item => {
            return item.id !== id;
        });

        setCart(itemCart)
    }

    useEffect(() => {
        setNumberCart(cart.length)
    }, [cart])

    if (isLoading) return <div>Loading...</div>

    return (
        <div className={styles.header}>
            <div className={styles.navBar} style={backGroundHeader ? { backgroundColor: 'rgba(72, 49, 37, 0.9)' } : {}}>
                <div className={styles.navLeft}>
                    <div className={styles.navLogo}></div>
                    <div className={styles.pageName}>Foodfy.</div>
                    <ul className={styles.menuList}>
                        <Link to="/" className={styles.textDecoration}>
                            <li className={styles.menuItem}>Home</li>
                        </Link>
                        <li className={styles.menuItem}>Menu</li>
                        <li className={styles.menuItem}>About</li>
                    </ul>
                </div>
                <div className={styles.navRight}>
                    <div className={styles.cart}>
                        <HiShoppingCart />
                        <span className={styles.rowNumber}>{numberCart}</span>
                        <div className={styles.cartContainer}>
                            <div className={styles.listCart}>
                                <h1 className={styles.title}>Sản Phẩm Đã Thêm</h1>
                                <div className={clsx(styles.wapperItem, 'wapperItem')} >

                                    {cart && cart.map((item, index) => (
                                        <div className={styles.itemCart} key={index}>
                                            <div><img className={styles.img} src={item.img}></img></div>
                                            <div className={styles.infoProduct}>
                                                <div className={styles.leftInfo}>
                                                    <div className={styles.nameProduct}>{item.name}</div>
                                                    <div className={styles.eatOutProduct}>{item.dsc}</div>
                                                </div>
                                                <div className={styles.rightInfo}>
                                                    <div className={styles.price}>
                                                        <div>${item.price}</div>
                                                        <div className={styles.quantily}> x1</div>
                                                    </div>
                                                    <div className={styles.deleteProduct}
                                                        onClick={() => handleDelete(item.id)}
                                                    >
                                                        <div>Xóa</div>
                                                        <div className={styles.iconDelete}><AiFillDelete /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.wapperUser}>
                        {isAuthenticated && (
                            <div className={styles.profile}>
                                <div className={styles.ImageUser}><img src={user.picture} alt={user.name} /> </div>
                                <h2 className={styles.nameUser}>{user.name}</h2>
                            </div>
                        )}
                        <Login />
                        <div className={styles.logout}> <Logout /> </div>
                    </div>
                </div>
            </div>
            <BackgroundSlider />
            {/* Go to Top */}
            {showGoToTop && (
                <div className={styles.goToTop} onClick={handleBack}>
                    <IoIosArrowUp />
                </div>
            )}
        </div>
    )
}

export default memo(Header)