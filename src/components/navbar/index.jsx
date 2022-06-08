import { AppBar, Box, Button, IconButton, Toolbar, Typography, Container } from '@mui/material';
import React, { useState } from 'react'
import { List } from './List';
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom';
import { list } from './listarray';
import { HomeOutlined, ShoppingCart } from '@mui/icons-material';

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <AppBar position='static'>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                    <Typography variant='h5'>
                        F3
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                        <IconButton sx={{ display: { xs: 'block', md: 'none' }, color: 'white' }}>
                            <MenuIcon onClick={handleOpenNavMenu} />
                        </IconButton>
                        <List anchorElNav={anchorElNav} handleCloseNavMenu={handleCloseNavMenu} />
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Button component={Link} to={'/'} startIcon={<HomeOutlined />} variant='text' color='inherit'>
                                Home
                            </Button>
                            <Button  startIcon={<ShoppingCart />} variant='text' color='inherit'>
                                Cart
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;