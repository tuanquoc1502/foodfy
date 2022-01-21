import { useEffect, useState, useContext, memo } from "react"
import { useStore } from "../../../store"
import { Link } from "react-router-dom"

import { productPopular } from "../../../services/dataIconPopular"
import { listFilter } from "../../../services/listFilter"
import productApi from '../../../api/productApi'
import NotificationCart from "./NotificationCart"

import clsx from "clsx"
import Select from "react-select"
import styles from './Container.module.scss'

/* Icon */
import { BiSearchAlt2 } from 'react-icons/bi'
import { VscListUnordered, VscListFlat } from 'react-icons/vsc'
import { GiRoundStar } from 'react-icons/gi'
import { IoLocation, IoHeartOutline } from 'react-icons/io5'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import CartContext from "../../../store/CartContext/Context"
import CategorySlider from '../../CategorySlider/CategorySlider'
import BackgroundSlider from '../../BackgroundSlider/BackgroundSlider'

const pages = [
    {
        id: 1,
        page: 1
    },
    {
        id: 2,
        page: 2
    },
    {
        id: 3,
        page: 3
    },
    {
        id: 4,
        page: 4
    }
]

function Container({ props }) {

    const [nameProduct, setNameProduct] = useState('best-foods')
    const [page, setPage] = useState(1)

    const [dataSearch, setDataSearch] = useState([])
    const [data, setData] = useStore()
    const [cart, setCart] = useContext(CartContext)
    const [productFrame, setProductFrame] = useState(false)

    // Api Product
    useEffect(() => {
        const fetchProductList = async () => {

            try {
                const params = {
                    _page: `${page}`,
                    _limit: 16,
                }
                const type = `${nameProduct}`

                const res = await productApi.getPage(type, params);
                setData(res)

            } catch (error) {
                console.log('apiFood', error)
            }
        }

        fetchProductList();
    }, [page, nameProduct])

    const handlePage = (id) => {
        setPage(Number(id))
    }

    const handleNextPage = () => {
        if (page < 4) {
            setPage(page + 1)
        }
    }

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    const handleSelectionProduct = (value) => {
        setNameProduct(value)
    }

    const handleTakeValue = (valueInput) => {
        const searchedProduct = props.filter(food => {
            return food.name.includes(valueInput)
        })

        setDataSearch(searchedProduct)
    }

    const handleAddCart = (itemProduct) => {
        setCart(prev => [...prev, itemProduct])
    }

    const handleProductsByRow = () => {
        setProductFrame(true)
    }

    const handleProductsByColumn = () => {
        setProductFrame(false)
    }

    return (
        <div className={styles.container}>
            <BackgroundSlider />
            <CategorySlider />
            <div className={'grid wide'}>
                <div className={styles.wapper}>

                    <div className={styles.sideBar}>
                        <h3 className={styles.title}> Popular </h3>
                        <ul className={styles.menuList}>

                            {productPopular.map(item => (
                                <li
                                    key={item.name}
                                    className={styles.menuItem}

                                    style={item.name === nameProduct ? {
                                        backgroundColor: 'rgba(0, 0, 0, 0.08)',
                                    } : {}}

                                    onClick={() => handleSelectionProduct(item.name)}
                                >
                                    <div className={styles.icon}>
                                        <img src={item.images}></img>
                                    </div>
                                    <span className={styles.name}>{item.name}</span>
                                </li>
                            ))}

                        </ul>
                    </div>

                    <div className={clsx(styles.product, 'row')}>

                        <div className={styles.feature}>

                            <div className={styles.search}>
                                <input
                                    className={styles.searchInput}
                                    placeholder="Search your product"
                                    onChange={(e) => handleTakeValue(e.target.value)}
                                />
                                <div className={styles.searchBtn}

                                ><BiSearchAlt2 /></div>
                            </div>

                            <div className={styles.filter}>
                                <Select
                                    className={styles.title}
                                    placeholder="Filter"
                                    options={listFilter}
                                />
                            </div>

                            <div className={styles.typePillar}>
                                <div className={styles.wapperIcon} onClick={handleProductsByRow}><VscListUnordered className={styles.iconTypePillar} /></div>
                                <div className={styles.wapperIcon} onClick={handleProductsByColumn}><VscListFlat className={styles.iconTypePillar} /></div>
                            </div>

                        </div>

                        <div className={styles.listProduct}>
                            {(dataSearch.length !== 0 && dataSearch.length !== 60 ? dataSearch : data).map(item => (
                                <div key={item.id} className={clsx(styles.itemProduct, 'col l-3 m-4 c-4', productFrame && styles.onePillar)}>

                                    <div className={styles.boxImg}>
                                        <Link to={`/product/${item.id}`}>
                                            <img src={item.img} className={styles.imgProduct}></img>
                                            <div className={styles.evaluate}>
                                                <span className={styles.iconStar}><GiRoundStar /></span>
                                                <span className={styles.numberStar}>{item.rate} </span>
                                            </div>
                                            <div className={styles.labelFavorite}>
                                                <span>Favourite</span>
                                            </div>
                                        </Link>
                                        <div className={styles.productBtn}>
                                            <div className={styles.favoriteBtn}><IoHeartOutline /> </div>
                                            <div className={styles.cartBtn} onClick={() => handleAddCart(item)}>
                                                <AiOutlineShoppingCart />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.box}>
                                        <h1 className={styles.nameProduct}> {item.name} </h1>
                                        <p className={styles.eatOutProduct}>{item.dsc}</p>
                                        <div className={styles.infoProduct}>
                                            <div className={styles.originProduct}>
                                                <IoLocation className={styles.iconLocaltion} />
                                                <span className={styles.country}>{item.country}</span>
                                            </div>
                                            <span className={styles.price}>$ {item.price}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>

                        <ul className={styles.paginationProduct}>
                            <li className={styles.prev}
                                onClick={handlePrevPage}><GrFormPrevious
                                    style={page === 1 ? { opacity: '0.3' } : {}}
                                />
                            </li>

                            {pages.map(childPage => (

                                <li
                                    key={childPage.id}
                                    className={styles.btnPage}
                                    style={childPage.id === page ? { backgroundColor: '#ff514e' } : {}}
                                    onClick={() => handlePage(childPage.page)}>
                                    {childPage.page}
                                </li>
                            ))}

                            <li className={styles.next} onClick={handleNextPage}>
                                <GrFormNext style={page === 4 ? { opacity: '0.3' } : {}} />
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </div >
    )
}

export default memo(Container)