import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Portfolio = ({data}) => {
  return (
    <Box  data-aos="fade-up" margin={'10px 0'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
        <Box  data-aos="fade-up" textAlign={'center'} fontWeight={'bold'} color={'#fff'}>
            <Typography variant='h5'>Join</Typography>
            <Typography variant='h4'>Join NFT Portfolio</Typography>
            <Typography variant='h2' width={'600px'}>Become a Monteno Player Now</Typography>
        </Box>
        <Box data-aos="fade-up" width={'100%'} display={'flex'} justifyContent={'space-around'} alignItems={'stretch'} flexWrap={'wrap'}>
            {data.map((item, index) => (
                <Box data-aos="fade-up" key={index} className={styles.cardPortfolio}>
                    <Box className={styles.cardPortfolioImg}><Image src={item.img} alt={item.title} /></Box>
                    <Typography color={'#fd562a'} fontWeight={'bold'} variant='body1'>{item.step}</Typography>
                    <Typography variant='h5' fontWeight={'bold'}>{item.title}</Typography>
                    <Typography variant='p'>{item.desc}</Typography>
                </Box>
                ))}
        </Box>
    </Box>
  )
}

export default Portfolio