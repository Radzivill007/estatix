import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'
import { Link as AnchorLink } from 'react-scroll'
// import Image from 'next/image'
// import logo from '../public/logo.png'
const Navbar = ({ lang }) => {
  const [open, setOpen] = React.useState(false)
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <Link href={`/`}>
          <img src='../logo.png' alt='Logo' />
          {/* <Image src={logo} alt='Logo' />  */}
        </Link>
        <div className={`${styles.menu} ${open && styles.open}`}>
          <AnchorLink to='about' smooth={true} offset={-200} duration={500} onClick={() => setOpen(false)}>
            О нас
          </AnchorLink>
          <AnchorLink to='DAO' smooth={true} offset={-100} duration={500} onClick={() => setOpen(false)}>
            DAO
          </AnchorLink>
          <AnchorLink to='investments' smooth={true} offset={-100} duration={500} onClick={() => setOpen(false)}>
            Инвестиции
          </AnchorLink>
          <AnchorLink to='pools' smooth={true} offset={-100} duration={500} onClick={() => setOpen(false)}>
            Pools
          </AnchorLink>
          <div className={styles.language} onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <div>{lang}</div>
            <div className={`${styles.dropdown} ${dropdownOpen && styles.open}`}>
              {lang === 'English' && <Link href='/'>Русский</Link>}
              {lang === 'Русский' && <Link href='/en'>English</Link>}
            </div>
          </div>
          <a className={styles.btn} href='https://t.me/Estatix_Main_Bot' target='_blank' rel='nofollow'>
            Купить токены
          </a>
        </div>
        <div className={`${styles.toggler} ${open && styles.open}`} onClick={() => setOpen(!open)}>
          <span />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
