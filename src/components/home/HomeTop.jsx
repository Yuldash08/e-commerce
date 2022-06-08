import { Box, Button, Skeleton } from '@mui/material'
import React from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { useCategories } from '../../contexts/Categories'

export const HomeTop = () => {
    const { categories, isError, isLoading } = useCategories()

    const navigate = useNavigate()

    const location = useLocation()

    const params = useParams()

    const navigateTo = (category) => {
        navigate(category === 'all' ? '/' : category)
    }
    return (

        <Box sx={{
            display: 'flex',
            gap: 2,
        }}>
            {isLoading && (
                <>
                    <Skeleton variant='rectangular' width={100} height={20} />
                    <Skeleton variant='rectangular' width={100} height={20} />
                    <Skeleton variant='rectangular' width={100} height={20} />
                    <Skeleton variant='rectangular' width={100} height={20} />
                </>
            )}
            {
                categories.map((category, index) => {
                    return (
                        <Button onClick={() => navigateTo(category)} key={index} variant={ params.id === category ? 'contained' : category === 'all' && location.pathname === '/' ? 'contained' : 'outlined'}>{category}
                        </Button>
                    )
                })
            }

        </Box>


    )
}