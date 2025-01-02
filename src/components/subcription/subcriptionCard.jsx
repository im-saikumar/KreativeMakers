import React from 'react'
import styles from "./subcription.module.css"

const subcriptionCard = (props) => {
  return (
    <div className={styles.card}>
      <div>
        <img className={styles.image} src={props.img} alt=''/>
      </div>
      
    </div>
  )
}

export default subcriptionCard