import Link from 'next/link';
import { Box } from '@mui/system'
import { useState } from 'react'
import { Typography } from '@mui/material';
import styles from '../../styles/Home.module.css'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay, Keyboard } from 'swiper';
import Image from 'next/image';
import sliderItems from '@/src/assets/data/slider';
import "swiper/css";
import { Button } from '@mui/base';

const Hero = () => {
  const [dataTExt] = useState({
    subTitle: 'We are Montone Team',
    title: 'Collect Next Generation Montone Today',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
  });
  return (
    <Box width={'100%'} height={'90vh'} marginTop={'10px'} paddingX={'1rem'} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff', border: '1px solid red'}}>
      <Box width={'50%'} height={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'flex-start'}>
        <Typography variant='h4'  data-aos="fade-up">{dataTExt.subTitle}</Typography>
        <Typography variant='h2' data-aos="fade-up" >{dataTExt.title}</Typography>
        <Typography marginBottom={'1rem'} variant='p' data-aos="fade-up" >{dataTExt.description}</Typography>
        <Box data-aos="fade-up" data-aos-duration="1200">
          <Button 
            className={styles.btnAction} 
            onClick={() => router.push('/')} 
          >
            Get Connect 
          </Button>
        </Box>
      </Box>
      <Box width={'50%'} height={'400px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box width={'100%'} height={'50%'} display={'flex'}>
          <Swiper
            modules={[ Autoplay  ]}
            direction={'vertical'}
            spaceBetween={50}
            slidersPerView={30}
            loop
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1200}
          >
            <SwiperSlide ><Image src={sliderItems.item1}  alt='Items'/></SwiperSlide>
            <SwiperSlide ><Image src={sliderItems.item1}  alt='Items'/></SwiperSlide>
            <SwiperSlide ><Image src={sliderItems.item1}  alt='Items'/></SwiperSlide>
            <SwiperSlide ><Image src={sliderItems.item1}  alt='Items'/></SwiperSlide>
            <SwiperSlide ><Image src={sliderItems.item1}  alt='Items'/></SwiperSlide>
            <SwiperSlide ><Image src={sliderItems.item1}  alt='Items'/></SwiperSlide>
            <SwiperSlide ><Image src={sliderItems.item1}  alt='Items'/></SwiperSlide>
            <SwiperSlide ><Image src={sliderItems.item1}  alt='Items'/></SwiperSlide>
            <SwiperSlide ><Image src={sliderItems.item1}  alt='Items'/></SwiperSlide>
            <SwiperSlide ><Image src={sliderItems.item1}  alt='Items'/></SwiperSlide>
            <SwiperSlide ><Image src={sliderItems.item1}  alt='Items'/></SwiperSlide>
            <SwiperSlide ><Image src={sliderItems.item1}  alt='Items'/></SwiperSlide>
            <SwiperSlide ><Image src={sliderItems.item1}  alt='Items'/></SwiperSlide>
            <SwiperSlide ><Image src={sliderItems.item1}  alt='Items'/></SwiperSlide>
            <SwiperSlide ><Image src={sliderItems.item1}  alt='Items'/></SwiperSlide>
          </Swiper>
          <Swiper
            modules={[ Autoplay ]}
            direction={'vertical'}
            spaceBetween={50}
            slidersPerView={3}
            loop
            autoplay={{
              delay: 1,
              reverseDirection: true,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1200}
          >
            <SwiperSlide sx={{border: '1px solid #fff'}}><Image src={sliderItems.item2}  alt='Items'/></SwiperSlide>
            <SwiperSlide sx={{border: '1px solid #fff'}}><Image src={sliderItems.item2}  alt='Items'/></SwiperSlide>
            <SwiperSlide sx={{border: '1px solid #fff'}}><Image src={sliderItems.item2}  alt='Items'/></SwiperSlide>
            <SwiperSlide sx={{border: '1px solid #fff'}}><Image src={sliderItems.item2}  alt='Items'/></SwiperSlide>
            <SwiperSlide sx={{border: '1px solid #fff'}}><Image src={sliderItems.item2}  alt='Items'/></SwiperSlide>
          </Swiper>
          <Swiper
            modules={[ Autoplay ]}
            direction={'vertical'}
            spaceBetween={50}
            slidersPerView={3}
            loop
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1200}
          >
            <SwiperSlide ><Image src={sliderItems.item3}  alt='Items'/></SwiperSlide>
            <SwiperSlide ><Image src={sliderItems.item3}  alt='Items'/></SwiperSlide>
            <SwiperSlide ><Image src={sliderItems.item3}  alt='Items'/></SwiperSlide>
            <SwiperSlide ><Image src={sliderItems.item3}  alt='Items'/></SwiperSlide>
            <SwiperSlide ><Image src={sliderItems.item3}  alt='Items'/></SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero