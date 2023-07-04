import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import Image from "next/image"
import styles from '../../styles/main.module.css'

const Monteno = ({data}) => {
  return (
    <Box data-aos="fade-up" width={'100%'} padding={'20px'} display={'flex'} justifyContent={'space-around'} alignItems={'center'} flexWrap={'wrap'}>
        {data.map((element, index) => (
            <Box data-aos="fade-up" key={index} className={styles.cardMontono}>
                <Image src={element.img} alt='Montono Item' />
                <Typography variant="body1">{element.title}</Typography>
            </Box>
        ))}
    </Box>
  )
}

export default Monteno