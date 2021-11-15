import React from "react";

const Order = ({details}) => {
return (
    <div className="order container">
        <h2>Order Details</h2>
        <p>Name:{details.name}</p>
        <p>Size:{details.size}</p>
        <p>Special Instructions:{details.special}</p>
    </div>
)
}
export default Order;
