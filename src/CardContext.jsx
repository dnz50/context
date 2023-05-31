import React, { useState } from 'react'
import { createContext } from 'react'

const CardContext=createContext()
export function CardProvider({children}) {
    const [items,setItems] = useState([]);
    const addToCart = (product)=>{
      const foundItem = items.find((item)=> item.id === product.id)
      if (foundItem){
        foundItem.amount++;
      }
      else{
        setItems([...items,{...product,amount:1}]);
      }
        
    }
  return (
    <CardContext.Provider value={{items,addToCart}}>
    {children}
    </CardContext.Provider>
  )
}

export default CardContext