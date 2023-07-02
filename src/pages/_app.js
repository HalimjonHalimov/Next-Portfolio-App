import { useEffect } from 'react';
import NProgress from "nprogress";
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles';
import createEmotionCache from '../helpers/createEmotionCache'
import theme from '../helpers/theme';

import { CssBaseline } from '@mui/material';
import "nprogress/nprogress.css";
import '../styles/globals.css'


const clientSideEmotionCache = createEmotionCache();


export default function App(props) {

  const { Component, emotionCache = clientSideEmotionCache, pageProps, router } = props;
  
  
  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();
 
    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);
    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);


  return(
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <CssBaseline />
      </ThemeProvider> 
    </CacheProvider> 
  )
}
