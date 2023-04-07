import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname === '/404') return <Component {...pageProps} />;
  return <>
    <NextSeo
      title='Sardor Khayitmuradov - Frontend Engineer'
      titleTemplate='Sardor Khayitmuradov - Frontend Engineer'
      description='Portfolio Website for Sardor Khayitmuradov - Frontend Engineer'
    />
    <Component {...pageProps} />
  </>
}
