import React, { useState } from 'react'

import foto1 from '../assets/camara.jpg'
export const AddItem = ({products, setProducts}) => {
    const [item, setItem] = useState({name: "cámara new", id:5, quantity: 6, src:foto1, description:"nueva camara"});
    const addItem = () =>{

        const newProducts = [...products, item];
        setProducts(newProducts);

    }

  return (
    <div>
        <button onClick={()=>addItem()}  className=' bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-md transition-colors m-4' >agregar item</button>
    </div>
  )
}
