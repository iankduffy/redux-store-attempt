import ModalBox from "components/shared/modalBox"
import { useState } from "react"
import ProductDetails from '../productDetails'
import InCart from "components/inCart"
import ConditionallyRender from 'components/shared/conditionalRendering'

const ProductLink = ({attributes, variants}) => {
  const [modalOpen, setModelOpen] = useState(false)

  const { title, picture_url, price, rating, reference } = attributes
  console.log(reference)
  return (
    <>
      <div onClick={() => setModelOpen(true)} className="u-dis-b u-pad-v-md u-curs-pointer">
        <div className="u-pos-relat">
          <ConditionallyRender client>
            <InCart reference={reference} />
          </ConditionallyRender>
          <img src={picture_url} alt={title} className="u-mar-b-sm"/>
        </div>
        <h4>{title}</h4>
        <p>£{price}</p>
        <button className="col-12 u-pad-v-sm u-mar-b-sm">View</button>
        <p>Ratings: {rating}</p>
      </div>
      <ModalBox title={title} isShowing={modalOpen} handleClose={() => setModelOpen(false)}>
        <ProductDetails {...attributes} variants={variants}/>
      </ModalBox>
    </>
  )
}

export default ProductLink