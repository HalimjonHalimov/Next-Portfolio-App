import { Box, Stack, Typography } from '@mui/material'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import styles from '../../styles/main.module.css'


const Road = ({data}) => {
  return (
    <Stack  data-aos="fade-up" margin={'10px 0'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
        <Box  data-aos="fade-up" textAlign={'center'} fontWeight={'bold'} color={'#fff'}>
            <Typography variant='h5'>Road Map</Typography>
            <Typography variant='h4'>Road Map</Typography>
            <Typography variant='h2' width={'600px'}>The Journey of Monteno NFT</Typography>
        </Box>
        <Box  className={styles.dataRoad} data-aos="fade-up" width={'80%'} display={'flex'} justifyContent={'space-around'} alignItems={'flex-start'} flexWrap={'wrap'}>
            {data.map((item, index) => (
                <Box  marginTop={item.class} data-aos="fade-up" key={index} className={styles.dataRoadMap} color={'#fff'}>
                    <Box className={styles.roadMapIcon}> <CheckRoundedIcon fontSize='medium' /> </Box>
                    <Typography color={'#fd562a'} fontWeight={'bold'} variant='body1'>{item.time}</Typography>
                    <Typography variant='h5' fontWeight={'bold'}>{item.title}</Typography>
                    <Typography variant='p'>{item.desc}</Typography>
                </Box>
            ))}
        </Box>
    </Stack>
  )
}

export default Road