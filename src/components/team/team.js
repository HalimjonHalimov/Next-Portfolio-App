import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'

const Team = () => {
  return (
    <Stack>
      <Box width={'100%'} height={'auto'} data-aos="fade-up" display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} textAlign={'center'} fontWeight={'bold'} color={'#fff'} >
          <Typography variant='h5'>Team </Typography>
          <Typography variant='h4'>Team</Typography>
          <Typography variant='h2' width={'600px'}>The Journey of Monteno NFT Team </Typography>
      </Box>
    </Stack>
  )
}

export default Team