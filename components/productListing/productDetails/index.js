import { useState } from "react"
import InCart from "components/inCart"
import { addToBag } from "features/cart"
import { useSelector, useDispatch } from 'react-redux'


// Todo: Style the variant Selector
const ProductDetails = ({variants, title, picture_url, price, reference, rating}) => {
  const [currentSelected, setSelected] = useState(variants[0].variantSize)
  const dispatch = useDispatch();

  const addItem = () => {
    const item = {
      variant: currentSelected,
      title, 
      picture_url, 
      price, 
      reference: reference,
      varient_sku: `${reference}_${currentSelected}`, 
      quantity: 1
    }

    dispatch(addToBag(item))
  }

  return (
    <div className="u-dis-flex">
      <div className="col-3">
        <img src={picture_url} alt={title} />
      </div>   
      <div className="col-9 u-pad-l-md">
        <h3>{title}</h3>
        <p className="h4">£{price}</p>
        <div>
          {variants.map((variant, key) => {
            const { variantSize } = variant
            return (
              <label key={key} 
              // className={`${styles.variant} ${(currentVariant.title == variant.title) ? styles.checked : ''}`}
              >
              {variantSize} 
              <input className="u-hidden" name="variant" type="radio" value={variantSize}
              checked={currentSelected === variantSize} onChange={() => setSelected(variant.variantSize)}
              />
            </label> )}
          )}
        </div>
        <button className="col-12 u-pad-v-sm u-mar-v-md" onClick={() => addItem()}>
          Add to Cart
        </button>
      </div> 
    </div>
  )
}

export default ProductDetails