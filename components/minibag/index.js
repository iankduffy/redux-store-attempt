import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import styles from './minibag.module.scss'


const Minibag = ({attributes, items}) => {
  const { line_items_count, total } = attributes
  return (
    <div className={styles.minibag}>
      {line_items_count} items in your bag
      <div>
        <h5>ITEMS</h5>
        Items goes here
      </div>
      <div>
        £{total}
      </div>
    </div>
  )
}

const MinibagParent = () => {
  const cart = useSelector((state) => state.cart)
  const [minibagOpen, setMinibagOpen] = useState(false)

  console.log({cart})

  return (
    <div className='u-pos-relat'>
      <div onMouseEnter={() => setMinibagOpen(true)} onMouseLeave={() => setMinibagOpen(false)}>
        {cart.attributes.line_items_count}  
      </div>
      {minibagOpen && <Minibag {...cart}/>}
    </div>
  )
}

export default MinibagParent