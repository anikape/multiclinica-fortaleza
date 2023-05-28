'use client';
import { useState } from 'react';
import styles from './navbar.module.css'
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Image
          src="/logo.svg"
          alt="logo da Multiclinica"
          width={150}
          height={150}
        />
      </div>
      <button className={styles.navbarToggle} onClick={handleNavToggle}>
        {isNavOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <ul className={`${styles.navbarLinks} ${isNavOpen ? styles.open : ''}`}>
        <li className={`${styles.navbarItem} ${styles.itens}`}>A Clinica</li>
        <li className={`${styles.navbarItem} ${styles.itens}`}>Serviços</li>
        <li className={`${styles.navbarItem} ${styles.itens}`}>Convênios</li>
        <li className={`${styles.navbarItem} ${styles.itens} ${styles.itensFour}`}>Contato</li>
      </ul>
    </nav>
  );
};

export default Navbar;
