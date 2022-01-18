import { useContext } from 'react'
import { StoreContext } from '../store'
import CartContext from './CartContext/Context'

export const useStore = () => {
    const [data, setData] = useContext(StoreContext)

    return [data, setData]
}

export const useStore2 = () => {
    const [cart, setCart] = useContext(CartContext)

    return [cart, setCart]
}
