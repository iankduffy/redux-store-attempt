import styles from './inCart.module.scss'
import { BsCartCheck } from 'react-icons/bs'
import { useState } from 'react'

const InCart = ({reference}) => {
  const inCart = false

  if (!inCart.length) {
    return null
  } 

  console.log({inCart})

  const text = inCart.length <= 1 ? inCart[0].variant : "Multi"

  return (
    <div className={styles.inCartButton} data-variant={text}>
      <div className="u-pos-relat">
        <div className={styles.cart}>
          <BsCartCheck />
        </div>
        <span className={styles.label}>{text}</span>
      </div>
    </div>
  )
}

export default InCart