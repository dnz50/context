import React from 'react'
import { useContext } from 'react'
import CardContext from '../CardContext'

function Checkout() {
  const { items } = useContext(CardContext)
  
  const total =Number( items.reduce((total,item)=>total + Number( item.price)*item.amount,0))
  console.log(items);
  return (
    <div className='row'>
      <h1>Total: <span className='badge bg-danger'>{total}</span>$</h1>
      {items.map((i) => (
      <div key={i.id} className="row">
        
        <div className="rounded shadow m-4 d-flex justify-content-between" style={{ width: "18rem" }}>
          <img src={i.image} style={{width:"100px"}} alt={i.title}/>
          <div className=" justify-content-between">
            <h1 className='textalign-center '>{i.title}</h1>
            <h4 className='text-light bg-primary rounded-pill p-2'>{i.price}$</h4>
            <p className='bg-secondary text-light rounded px-2'><strong>{i.amount}</strong> : items</p>
          </div>
        </div>

      </div>
    )
    )}</div>
  )
}

export default Checkout