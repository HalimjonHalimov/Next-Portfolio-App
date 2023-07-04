import { Box } from '@mui/material'
import React from 'react'
import { Footer,  Navbar } from '../components'

const Layout = ({children}) => {
  return (
    <Box>
        <Navbar />
           <Box>    
            {children}
           </Box>
        <Footer />
    </Box>
  )
}

export default Layout