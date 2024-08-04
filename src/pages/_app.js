import '@/styles/globals.scss'
import 'aos/dist/aos.css';
import AOS from 'aos';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import { Poppins } from 'next/font/google'
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  preload: true,
  fallback: ['system-ui', 'arial'],
})



export default function App({ Component, pageProps }) {
  const router = useRouter();
  React.useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  React.useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap.bundle.min")
      : null;
  }, [router.events]);
  const getLayout = Component.getLayout || ((page) => page)
  return <Fragment>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Cadbull</title>
      <meta name="description" content="World Largest 2d CAD Library." />
    </Head>
    <style jsx global>{`
        * {
          font-family: ${poppins.style.fontFamily} !important;
        }
      `}</style>
    {
      getLayout(<Component {...pageProps} />)
    }
  </Fragment>
}
