import { Content, Hero, Monteno, Portfolio, Road, Seo, Special } from '../components';
import { useRouter } from 'next/router';
import AOS from 'aos';
import { useEffect } from 'react';
import Layout from '../layout/layout';
import dataCard from '../assets/data/dataCard';
import dataPortfolio from '../assets/data/dataPortfolio';
import dataMonteno from '../assets/data/dataMonteno';
import dataRoadMap from '../assets/data/dataRoadMap';
import Team from '../components/team/team';



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
        <Content />
        <Special data={dataCard}/>
        <Portfolio data={dataPortfolio} />
        <Monteno data={dataMonteno} />
        <Road  data={dataRoadMap}/>
        <Team />
      </Layout>
    </Seo>
  )
}
