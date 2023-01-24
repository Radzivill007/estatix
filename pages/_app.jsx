import '../styles/globals.scss'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({ preload: false, fallback: ['sans-serif'], weight: ['400', '500', '700'] })

const MyApp = ({ Component, pageProps }) => (
  <>
    <style jsx global>{`
      * {
        font-family: ${montserrat.style.fontFamily};
      }
    `}</style>
    <Component {...pageProps} />
  </>
)

export default MyApp
