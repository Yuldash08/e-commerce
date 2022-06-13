import React, { useEffect } from 'react'
import { useProductsByCategory } from '../../contexts/ProductsByCategory'
import { useParams } from 'react-router-dom'
import { useAllProduct } from '../../contexts/AllProducts'
import { SkeletonCard } from '../../components/SkeletonCard'
import { Grid } from '@mui/material'
import { ProductCard } from '../../components/home/ProductCard'

export const Products = () => {
    const { products, getProductsCategory } = useProductsByCategory()
    const allProducts = useAllProduct()
    const params = useParams()

    useEffect(() => {
        if (params.id) {
            getProductsCategory(params.id)
        }
    }, [params.id])

    if (!params.id) {
        return <Grid container spacing={2} justifyContent='flex-start' alignItems='stretch'>
            {allProducts.isLoading && (
                <>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <SkeletonCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <SkeletonCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <SkeletonCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <SkeletonCard />
                    </Grid>
                </>
            )}

            {
            allProducts.products.map(product => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product} />
                    </Grid>
                ))
            }
        </Grid>
    }

    return <Grid container spacing={2} justifyContent='flex-start' alignItems='stretch'>
        {products.isLoading && (
            <>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SkeletonCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SkeletonCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SkeletonCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SkeletonCard />
                </Grid>
            </>
        )}

        {
            products.products.map(product => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard product={product} />
                </Grid>
            ))
        }
    </Grid>
}
