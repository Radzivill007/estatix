import Link from 'next/link'
import styles from './Footer.module.scss'
// import Image from 'next/image'
// import logo from '../public/logo.png'
import Telegram from '../public/telegram.svg'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <div>
        <Link href={`/`} className='d-sm-none'>
          <img src='../logo.png' alt='Logo footer' />
          {/* <Image src={logo} alt='Logo footer' /> */}
        </Link>
        <div className={styles.privacy}>
          <Link href='/privacy'>Политика конфиденциальности</Link>
        </div>
      </div>
      <div>
        <p>Контакты</p>
        <a href='https://t.me/Estatix_Main_Bot' target='_blank' rel='nofollow'>
          <Telegram />
        </a>
      </div>
      <div>
        <a href='mailto:info@estatix.org' target='_blank' rel='nofollow'>
          info@estatix.org
        </a>
        <Link href={`/`} className='d-sm-block'>
          <img src='../logo.png' alt='Logo mobile' />
          {/* <Image src={logo} alt='Logo mobile' /> */}
        </Link>
      </div>
    </div>
  </footer>
)

export default Footer
