import {useState} from 'react'
import styles from './header.module.scss'
import Minibag from 'components/minibag'

const Header = () => {
  const [minibagVisible, setMinibagVisible] = useState(false)

  return (
    <header className={styles.header}>
      <div>Logo</div>
      <div><Minibag /></div>
    </header>
  )
}

export default Header