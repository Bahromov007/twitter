import React from 'react'
import styles from "./LogoutModal.module.scss"

export default  function LogoutModal() {
  return (
    <>
    <div className={styles.modal}>
        <div className={styles.container}>
            <button className={styles.button}>Add an existing account</button>
            <button className={styles.button}>Log out</button>
        </div>
    </div>
    </>
  )
}

