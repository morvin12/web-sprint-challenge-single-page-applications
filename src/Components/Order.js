import React from 'react'
//While there are missing order details, app provides fetching order details 
function Order({ details }) {
  if (!details) {
    return <h3>Fetching your order details...</h3>
  }
//Order details loading.
  return (
    <div className='order container'>
      <h2>Your Order Details</h2>
      <p>Name:{details.name}</p>
      <p>Size:{details.size}</p>
      <p>Special Instructions: {details.special}</p>

      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Toppings:
          <ul>
            {details.toppings.map((pick) => 
                <li >{pick}</li>)}
          </ul>
        </div>
      }
      
    </div>
  )
}
export default Order