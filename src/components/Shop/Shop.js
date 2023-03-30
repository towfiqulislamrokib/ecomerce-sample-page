import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect( ()=> {
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
    },[])
    const handleAddtoCart = (product) => {
        //console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-conatiner'>
            <div className="product-container">
              {
                products.map(product => <Product
                product = {product}
                key= {product.id}
                handleAddtoCart = {handleAddtoCart}
                ></Product>)
              }
            </div>
            <div className="cart-container">
               <h3>Order Summary</h3>
               <p>Selected Item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;