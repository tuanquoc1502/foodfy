import Header from "./layout/header/Header"
import Container from "./layout/container/Container"
import Footer from "./layout/footer/Footer"
import { useState, useEffect } from "react"
import productApi from "../api/productApi"

function HomePage() {

    const [state, setState] = useState([])

    useEffect(() => {

        const fetchProductList = async () => {
            try {

                const type = 'best-foods'

                const res = await productApi.getItem(type);
                setState(res)

            } catch (error) {
                console.log('apiFood', error)
            }
        }

        fetchProductList();

    }, [])

    return (
        <div>
            <Header />
            <Container props={state} />
            <Footer />
        </div>
    )
}

export default HomePage