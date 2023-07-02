import { Box } from '@mui/material'
import React from 'react'
import { Footer, Header } from '../components'

const Layout = ({children}) => {
  return (
    <Box>
        <Header />
            <h1>Content</h1>
            {children}
        <Footer />
    </Box>
  )
}

export default Layout