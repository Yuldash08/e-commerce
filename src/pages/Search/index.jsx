import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../../components/home/ProductCard'

export const index = () => {
    const { products } = useAllProduct()
    const { product } = useParams()

    const prods = products.filter(p => p.title.toLowerCase().includes(product.toLowerCase()))

    if (!prods.length) {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                m: 5,
                alignItems: 'center'
            }}>
                <Typography color='darkgray'>
                    No Result
                </Typography>
            </Box>
        )
    }

    return (
        <Grid container spacing={2} justifyContent='flex-start' aligItems='stretch' sx={{ mt: 5 }}>
            {
                prods.map((p, i) => {
                    return (
                        <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                            <ProductCard product={p} />
                            <Grid />
                            )
            }
                        </Grid>
                })