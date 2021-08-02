import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../services/actions/productAction'
// import { useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'

function ProductListing() {
    // const products = useSelector(state => state)
    // console.log(products.allProducts.products)

    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
            console.log('Error', err)
            })
        
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts()
    },[])

    return (
        <div className='ui grid container' >
            <br/>
            <ProductComponent/>
        </div>
    )
}

export default ProductListing
