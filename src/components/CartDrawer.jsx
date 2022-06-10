import { Close } from '@mui/icons-material'
import { Box, Button, Drawer, IconButton, Typography } from '@mui/material'
import React from 'react'
import { useCart } from '../contexts/Cart'
import { useDrawer } from '../contexts/Drawer'
import { CartProduct } from './CartProduct'

export const CartDrawer = () => {
    const { open, closeDrawer } = useDrawer()
    const { cart, clearCart } = useCart()

    
    return <Drawer anchor='right' open={open} onClose={closeDrawer}>
        <Box sx={{
            width: 300,
            p: 2
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: "row-reverse",
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Typography sx={{
                    fontSize: 20
                }}>
                    Your Shopping Cart
                </Typography>
                <IconButton onClick={closeDrawer}>
                    <Close/>
                </IconButton>
            </Box>
            <Box sx={{
                display: 'flex',
                gap: 1,
                mt: 2
            }}>


                <Button onClick={clearCart} sx={{ width: '100%' }} variant='outlined' color='warning'>Clear</Button>
                <Button sx={{ width: '100%' }} variant='contained' color='warning'>Buy</Button>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                mt: 2
            }}>
                {
                    cart.map(product => {
                        return(
                            <CartProduct key={product.id} product={product} />
                        )
                    })
                }
            </Box>
        </Box>
    </Drawer>
}
