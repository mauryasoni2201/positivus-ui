import { NextUIProvider } from "@nextui-org/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../styles/font.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
