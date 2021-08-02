/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeSelectedProduct, selectProducts } from '../services/actions/productAction';

function ProductDetails() {

    const { productId } = useParams();
    const product = useSelector(state => state.product)
    const { image, price, category, description, title } = product;
    const dispatch = useDispatch()

    
    const fetchProductDetail = async () => {
        const response = await axios
          .get(`https://fakestoreapi.com/products/${productId}`)
          .catch((err) => {
            console.log(err);
          });
        
        dispatch(selectProducts(response.data))
        
        

    }

    useEffect(() => {
      if (productId && productId !== "") fetchProductDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
        
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId]);
    return (
      <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} alt='title'/>
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <p className="ui teal tag label">${price}</p>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}

export default ProductDetails
