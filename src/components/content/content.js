import { Box } from '@mui/system'
import { useState } from 'react'
import sliderItems from '@/src/assets/data/slider';
import Image from 'next/image';

import styles from '../../styles/Home.module.css'
import { Typography } from '@mui/material';
import { Button } from '@mui/base';

const Content = () => {
  const [data] = useState({
    title: 'About Us',
    subtitle: 'Hight Quality NFT Collections',
    description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    subdescription: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
  })

  return (
    <Box display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} flexDirection={'row'}>
        <Box width={'40%'} height={'500px'} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} >
          <Box className={styles.contentImage}>
            <Image src={sliderItems.item10}  alt="Image"/>
          </Box>
          <Box className={styles.contentImage}>
            <Image src={sliderItems.item9}  alt="Image"/>
            <Image src={sliderItems.item8}  alt="Image"/>
          </Box>
        </Box>
        <Box  width={'40%'} height={'500px'} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} alignItems={'center'} color={'#fff'}>
          <Typography variant='h4'  data-aos="fade-up">{data.subTitle}</Typography>
          <Typography variant='h2' data-aos="fade-up" >{data.title}</Typography>
          <Typography marginBottom={'1rem'} variant='p' data-aos="fade-up" >{data.description}</Typography>
          <Typography marginBottom={'1rem'} variant='p' data-aos="fade-up" >{data.subdescription}</Typography>
          <Box data-aos="fade-up" data-aos-duration="1200">
            <Button 
              className={styles.btnAction} 
            >
              About Us 
            </Button>
          </Box>
        </Box>
    </Box>
  )
}

export default Content