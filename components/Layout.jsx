import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer.jsx'

const Layout = ({ children, title, lang }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon64x64.png" />
    </Head>
    <Navbar lang={lang} />
    <main>{children}</main>
    <Footer lang={lang} />
  </>
)

export default Layout
