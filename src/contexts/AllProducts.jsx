import { createContext, useContext, useEffect, useState } from "react";
import query from '../services/api/api.service'
import shuffle from "../utilities/shuffle";

const AllProductsContext = createContext({isLoading: false, isError: false, products: []})
AllProductsContext.displayName = 'AllProductsContext'

export const useAllProduct = () => useContext(AllProductsContext)

const AllProductsProvider = ({ children }) => {
    const [allProducts, setAllProducts] = useState({
        isloading: false,
        products: [],
        isError: false
    })

    useEffect(() => {
        setAllProducts({ isLoading: true, isError: false, products: [] })
        query.getAllProducts()
            .then(result => setAllProducts({ isLoading: false, products: shuffle(result.data), isError: false }))
            .catch(err => setAllProducts({ isLoading: false, products: [], isError: true }))
    }, [])
    return (
        <AllProductsContext.Provider value={allProducts}>
            {children}
        </AllProductsContext.Provider>
    ) 
}
export default AllProductsProvider

