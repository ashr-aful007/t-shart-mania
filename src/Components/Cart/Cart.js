import React from 'react'
import './Cart.css'
function Cart({cart,handleRemoveItem}) {


  //condisonal reandaring
  let message;
  if(cart.length === 0){
     message = <p>Please buy at least one item !!</p>
  }
  else if (cart.length === 1){
    message = <div>
      <h3>Amar jnno ekta nao</h3>
      <p>tomar nijer jonno akta nao</p>
      <p><small>amar jonno arekta nao, pleasse</small></p>
    </div>
  }
  else{
    message = <p>Thanks for buying!</p>
  }



  return (
    <div>
      <h3 className={cart.length === 2 ? `orange` : `purpul`}>order summary</h3>
      <h5 className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>Order quantity: {cart.length}</h5>
      {
        cart.map(tshirt => <p
            key={tshirt._id}
         >
          {tshirt.name}
          <button onClick={()=> handleRemoveItem(tshirt)}>X</button>
         </p>)
      }
      {
        message
      }
      {cart.length === 3 ? <p>tin jon ke gift diba?</p> : <p>kino kino</p> }

      {/* consdisonal reandaring use && operator */}
      {cart.length === 2 && <h4>Double items</h4>}

      {/* or operator */}
      {cart.length === 4 || <p>Charta item na</p>}

    </div>
  )
}

export default Cart;


/**
 * conditional Rendering
 * 1. use element in a variable and then use if-else to set value;
 * 2. ternary operation condition ? true : false
 * 3. && operator (if condition is true i want to display somethig)
 *  || operator (if condition is false, i want ot display something)
 */