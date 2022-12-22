import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Error from '../components/Error/error'
import styles from '../styles/error.module.css'

export default function Errorpage() {
  return (
    <>
      <div className={styles.errorpage}>
        <div className={styles.container}>
          <Navbar/>
          <Error/>
        </div>
      </div>
    </>
    
  )
}

