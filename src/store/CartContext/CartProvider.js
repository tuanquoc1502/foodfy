import { useState } from "react";
import CartContext from "./Context";

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;