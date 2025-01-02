import React from 'react'
import styles from "./popLayout.module.css"

const popLayout = () => {
  return (
    <>
    <div className={styles.box}>
      <div className={styles.bottom}>
        <p className={styles.p}>click to open</p>
      </div>
    </div>
  </>
  )
}

export default popLayout