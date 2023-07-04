import { Typography } from '@mui/material';
import { Box } from '@mui/system'
import  { useState } from 'react'
import styles from '../../styles/Home.module.css'


const Special = ( {data} ) => {
    const [dataTitle] = useState({
        title: 'Special Title',
        subtitle: 'Complete Solutions for your NFT',
        description: 'Lorem ipsum is placeholder text commonly used in the graphic Lorem ipsum is placeholder text commonly used in the graphic Lorem ipsum is placeholder text commonly used in the graphic',

    });
  return (
    <Box display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} flexDirection={'row'}>
        <Box  width={'40%'} height={'500px'} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} alignItems={'flex-start'} color={'#fff'}>
          <Typography variant='h5'  data-aos="fade-up">{dataTitle.subtitle}</Typography>
          <Typography variant='h1' data-aos="fade-up" >{dataTitle.title}</Typography>
          <Typography marginBottom={'1rem'} variant='p' data-aos="fade-up" >{dataTitle.description}</Typography>
        </Box>
        <Box width={'50%'} height={'auto'} display={'flex'} justifyContent={'flex-start'} flexWrap={'wrap'} alignItems={'flex-start'} color={'#fff'} >
            {data.map((item, index) => (
                <Box 
                    key={index} 
                    className={styles.cardItem} 
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    marginTop={'10px'}
                >
                    <Typography sx={{fontWeight: 'bold'}} variant='h3' color={'#fd562a'}>{item.stt}</Typography>
                    <Typography className={styles.cardtitle} sx={{fontWeight: 'bold'}} variant='h5'>{item.title}</Typography>
                    <Typography marginBottom={'1rem'} variant='body1'>{item.desc}</Typography>
                </Box>
            ))}
        </Box>
    </Box>
  )
}

export default Special