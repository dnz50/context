import React from 'react'
import Card from './card'

const product=[
  {
    id:1,
    title:"Shirt",
    price:"100",
    image:"data:image/jpeg;base64,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"
  },
  {
    id:2,
    title:"Pant",
    price:"150",
    image:"data:image/jpeg;base64,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"
  },
  {
    id:3,
    title:"Bag",
    price:"200",
    image:"data:image/jpeg;base64,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"
  },
  {
    id:4,
    title:"Cap",
    price:"50",
    image:"data:image/jpeg;base64,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"
  }
]
function Products() {
  return (
    <div className='d-flex' >
      {product.map((i,index)=>(
      <Card product={i}
      key={index}/>
      ))};
      
    </div>
  )
}

export default Products