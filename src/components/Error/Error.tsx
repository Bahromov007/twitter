import React from 'react'
import styles from './Error.module.scss'
import Link from 'next/link'

export default function Error() {
  return (
    <>
      <div className={styles.errorpage}>
        <p className={styles.errorpage__text}>Hmm...this page doesn’t exist. Try searching for something else.</p>
        <button className={styles.errorpage__button} >search</button>
        
      </div>
    </>
  )
}

