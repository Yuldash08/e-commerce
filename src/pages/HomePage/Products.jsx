import React, { useEffect } from 'react'
import { useProductsByCategory } from '../../contexts/ProductsByCategory'
import { useParams } from 'react-router-dom'
 
export const Products = () => {
    const { products, getProductsCategory } = useProductsByCategory()

    const params = useParams()

    useEffect(() => {
        if(params.id) {
            getProductsCategory(params.id)
        }
    }, [params.id])
    return (
        <div>Products</div>
    )
}
