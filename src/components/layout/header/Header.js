import { useEffect, useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { memo } from 'react'

import { HiShoppingCart } from 'react-icons/hi'
import { IoIosArrowUp } from 'react-icons/io'
import { AiFillDelete } from 'react-icons/ai'
import { BsArrowRightShort } from 'react-icons/bs'
import { GoThreeBars } from 'react-icons/go'

import styles from './Header.module.scss'
import clsx from 'clsx'
import { useStore2 } from "../../../store"
import Login from "../../../auth/Login"
import Logout from '../../../auth/Logout'
import LogoutMobile from "../../../auth/LogoutMobile"
import { useAuth0 } from '@auth0/auth0-react'

function Header() {

    const [cart, setCart] = useStore2()
    const [numberCart, setNumberCart] = useState([])

    const [showGoToTop, setGoToTop] = useState(false)
    const [backGroundHeader, setBackgroundHeader] = useState(false)
    const [navBar, setNavBar] = useState(false)

    const { user, isAuthenticated } = useAuth0();
    const { isLoading } = useAuth0();

    const total = useMemo(() => {

        const result = cart.reduce((result, prod) => {
            return result + prod.price
        }, 0)

        return result

    }, [cart])

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

    const handleOpenNavBar = () => {
        setNavBar(true)
    }

    const handleStopModal = () => {
        setNavBar(false)
    }

    useEffect(() => {
        setNumberCart(cart.length)
    }, [cart])


    if (isLoading) return <div></div>

    return (
        <div className={styles.header}>
            <div className={styles.navBar} style={backGroundHeader ? { backgroundColor: 'rgba(72, 49, 37, 0.9)' } : {}}>
              
                <div className={styles.wapperNavbarMobile}>
                    <div className={styles.iconNavBar} onClick={handleOpenNavBar}><GoThreeBars /></div>
                    <div className={styles.navbarMobile} style={navBar ? { display: 'block' } : { display: 'none' }}>
                        <div className={styles.wapperUserMobile}>
                            {isAuthenticated && (
                                <div className={styles.profile}>
                                    <div className={styles.ImageUser}><img src={user.picture} alt={user.name} /> </div>
                                    <h2 className={styles.nameUser}>{user.name}</h2>
                                </div>
                            )}
                            <Login />
                            <div className={styles.logout}> <LogoutMobile /> </div>
                        </div>

                        <ul className={styles.menuListMb}>
                            <Link to="/" className={styles.textDecoration}>
                                <li className={styles.menuItemMb}>Home</li>
                            </Link>
                            <Link to="/favorite" className={styles.textDecoration}>
                                <li className={styles.menuItemMb}>Favorite</li>
                            </Link>
                            <Link to="/about" className={styles.textDecoration}>
                                <li className={styles.menuItemMb}>About</li>
                            </Link>
                        </ul>

                    </div>
                    <div className={styles.overlay} onClick={handleStopModal} style={navBar ? { display: 'block' } : { display: 'none' }}></div>

                </div>

                <div className={styles.navLeft}>
                    <div className={styles.navLogo}></div>
                    <div className={styles.pageName}>Foodfy.</div>
                    <ul className={styles.menuList}>
                        <Link to="/" className={styles.textDecoration}>
                            <li className={styles.menuItem}>Home</li>
                        </Link>
                        <Link to="/favorite" className={styles.textDecoration}>
                            <li className={styles.menuItem}>Favorite</li>
                        </Link>
                        <Link to="/about" className={styles.textDecoration}>
                            <li className={styles.menuItem}>About</li>
                        </Link>
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

                                <div className={styles.paymentBtn}>
                                    <span className={styles.price}>$ {total}</span>
                                    <span className={styles.checkout}>Checkout <BsArrowRightShort /></span>
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