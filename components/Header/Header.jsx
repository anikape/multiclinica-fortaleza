import React from 'react'
import styles from './header.module.css'
import Navbar from '../Navbar/Navbar'


const Header = () => {
  return (
    <section className={styles.headerConatiner}>
    <section className={styles.header}>
      <div className={styles.navContainer}>
      <Navbar />
      </div>
     
    </section>
    </section>
  )
}

export default Header