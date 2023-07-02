import { Hero, Navbar, Seo } from '../components';
import { useRouter } from 'next/router';
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
        <Hero />
      </Layout>
    </Seo>
  )
}
