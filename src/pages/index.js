import { Header, Seo } from '../components';
import { useRouter } from 'next/router';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';

import styles from '../styles/Home.module.css'
import { useEffect } from 'react';
import Layout from '../layout/layout';



export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])
  const router = useRouter();

  return (
    <Seo>
      <Layout>
        <h1> Home pages </h1>
      </Layout>
    </Seo>
  )
}
