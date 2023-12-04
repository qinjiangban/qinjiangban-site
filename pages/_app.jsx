import "./css/www.css";
import './css/Novice.css';
import './css/Home.css'

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
