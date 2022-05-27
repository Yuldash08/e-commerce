import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react'
import { List } from './List';
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom';
import { list } from './listarray';

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
                        <Box>
                            {
                                list.map(item => {
                                    return (
                                        <Button component={Link} to={item.path} startIcon={<item.icon/>} variant='text' color='inherit'>
                                            {item.title}
                                        </Button>
                                    )
                                })
                            }
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;