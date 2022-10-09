import React from 'react'
import './Tshirt.css'

function Tshirt({tshirt, handleAddToCart}) {
     const {name, picture, price} = tshirt;

  return (
    <div className='t-shirt'>
     <img src={picture} alt="" />
     <p>thirt Name: {name}</p> 
     <h4>Price: {price}</h4>
     <button onClick={()=>handleAddToCart(tshirt)}>Buy this</button>    
     </div>
  )
}

export default Tshirt;