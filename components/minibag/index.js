import { useSelector, useDispatch } from 'react-redux'

const Minibag = () => {
  const cart = useSelector((state) => state.cart)

  console.log({cart})

  return (
    <div>
    </div>
  )
}

export default Minibag