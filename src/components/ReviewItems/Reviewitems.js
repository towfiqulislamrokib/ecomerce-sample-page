import React from 'react';
import './Reviewitems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Reviewitems = ({product, handleRemoveItem}) => {
    const {img, name, price, shipping, id} = product;
    return (
        <div className='review-item'>
            <div>
            <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                    <div className="review-detail">
                        <p>{name}</p>
                        <p><small>Price: <span className='price-color'>${price}</span></small></p>
                        <p><small>Shipping: <span className='price-color'>${shipping}</span></small></p>
                    </div>
                    <div className="delete-container">
                        <button onClick={()=> handleRemoveItem(id)} className='btn-delete'>
                            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default Reviewitems;