import { SearchOutlined } from '@mui/icons-material'
import { Box, Container, Divider, IconButton, InputBase, Paper } from '@mui/material'
import React, { Fragment, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { HomeTop } from '../../components/home/HomeTop'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const HomePage = () => {
  const [value, setValue] = useState('')
  const [ warning, setWarning] = useState(false)

  const navigate = useNavigate()

  const clickHandler = () => {
    if (!value.trim() || value.length < 3) return
    navigate('/search/' + value)
  }

  useEffect(() => {
    setTimeout(() => {
      setWarning(false)
    }, 3000)
  }, [warning === true])
  return (
    <Fragment>
      <Container maxWidth='xl'>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          mt: 6,
        }}>
          <HomeTop />
          <Paper variant='outlined' sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', border: '1px solid' , borderColor: warning ? 'red' : 'gray' }}>
            <InputBase placeholder={warning ? 'Min Length 3' : 'Search'} onChange={(event) => setValue(event.target.value)} />
            <IconButton onClick={clickHandler}>
              <SearchOutlined />
            </IconButton>
          </Paper>
        </Box>
        <Divider sx={{ mt: 4 }} />
        <Outlet />
      </Container>
    </Fragment>
  )
}

export default HomePage