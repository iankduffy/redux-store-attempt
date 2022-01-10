import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from 'features/count';
import data from 'data/products.json'
import Layout from 'components/layout'
import ProductListingContainer from 'components/productListing'


export default function Home({products}) {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  return (
    <Layout>
      <ProductListingContainer products={products} />
    </Layout>
  )
}


export async function getStaticProps({ params, preview = false, ...props }) {
  const products = data

  return {
    props: {
      products: products, 
    },
  }
}