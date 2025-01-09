import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Popup from "@/components/others/PopUp";

// Import the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins", 
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.variable} font-sans`}>
      <Popup>
      <Component {...pageProps} />
      </Popup>
    </div>
  );
}
