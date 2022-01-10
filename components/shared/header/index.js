import {useState} from 'react'
import styles from './header.module.scss'
import MinibagParent from 'components/minibag'

const Header = () => {
  const [minibagVisible, setMinibagVisible] = useState(false)

  return (
    <header className={styles.header}>
      <div>Logo</div>
      <div><MinibagParent /></div>
    </header>
  )
}

export default Header