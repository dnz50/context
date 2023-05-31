import React from 'react'
import { useContext } from 'react';
import CardContext from '../CardContext';

function Card({ product }) {
  const {addToCart} =useContext(CardContext);
  return (

    <div className="card rounded shadow m-4" style={{width:"18rem"}}>
      <img  src={product.image} />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h1 className='textalign-center '>{product.title}</h1>
          <h4 className='text-light bg-primary rounded-pill p-2'>{product.price}$</h4>
        </div>
        <button className='btn btn-outline-primary'
         onClick={()=>{addToCart(product)}}>Add to Cart</button>
      </div>

    </div>
  )
}

export default Card