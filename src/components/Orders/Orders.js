import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Reviewitems from '../ReviewItems/Reviewitems';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const { initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const handleRemoveItem = (id) => {
        const reamining = cart.filter(product => product.id !== id);
        setCart(reamining);
        removeFromDb(id);
    }
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
     }
    return (
        <div className='shop-conatiner'>
            <div className="orders-container">
               {
                cart.map(product => <Reviewitems
                key={product.id}
                product={product}
                handleRemoveItem={handleRemoveItem}
                ></Reviewitems>)
               }
               {
                cart.length === 0 && <h2>No items review. Please <Link to="/">Shop More..</Link></h2>
              }
            </div>
            <div className="cart-container">
              <Cart cart={cart}
              clearCart={clearCart}
              >
                <Link to='/shipping'>
                    <button>Procced Shipping</button>
                </Link>
              </Cart>
            </div>
        </div>
    );
};

export default Orders;