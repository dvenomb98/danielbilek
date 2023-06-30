import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import '@/styles/globals.css';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import Messenger from '@/components/atoms/Messenger';
import { useToggle } from 'react-use';
import useMobileWidth from '@/hooks/useMobile';

const seoDefaultTitle = 'Daniel Bílek';
const seoDefaultDescription =
  'My name is Daniel Bílek, and I am a front-end developer with a passion for organised work, creative problem solving, and critical thinking. I aim to deliver high-quality, user-friendly websites and web applications.';

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, toggle] = useToggle(false);
  const { isMobile } = useMobileWidth();
  return (
    <>
      <DefaultSeo title={seoDefaultTitle} description={seoDefaultDescription} />
      <ThemeProvider defaultTheme="dark" attribute="class">
        <Navbar />
        <Component {...pageProps} />
        {!isMobile && <Messenger isOpen={isOpen} toggle={toggle} />}
        <Footer />
      </ThemeProvider>
      <Analytics />
    </>
  );
}
