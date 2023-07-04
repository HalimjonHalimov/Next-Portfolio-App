import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'

const Footer = () => {
  return (
    <Box width={'90%'} height={'auto'} padding={'10px 0'} margin={'10px auto'} borderTop={'1px solid #f1f1f1'}>
      <Typography variant='body2' color={'#fff'}>Copyright © 2023 all rights reserved</Typography>
    </Box>
  )
}

export default Footer