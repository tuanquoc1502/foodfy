import { useState } from "react";
import Context from "./Context";

function Provider({ children }) {
    const [data, setData] = useState([])

    const [cart, setCart] = useState([])


    const value = {
        data: [data, setData],
        cart: [cart, setCart]
    }

    return (
        <Context.Provider value={[data, setData]}>
            {children}
        </Context.Provider>
    );
}

export default Provider;