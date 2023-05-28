
import React from 'react'
import styles from './exames.module.css'
import Forms from '../../components/Forms/Forms'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'




const exames = () => {
  return (
    <secttion className={styles.container}>
    <section className={styles.examesConatiner}>
    <div className={styles.navbar}>
    <Navbar />
    </div>
    <section className={styles.formulario}>
     <Forms />
     </section>
     <Footer />
     </section>
    
     
     </secttion>
  )
}

export default exames