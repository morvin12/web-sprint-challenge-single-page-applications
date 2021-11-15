import React from "react";
import { Link } from 'react-router-dom';

const PizzaForm = (props) => {
    const {
        change,
        values,
        submit,
        errors,
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const {name, value, checked, type} = event.target
        const realValue = type === 'checkbox' ? checked : value;
        change(name, realValue)
    }

    return (
        <div className="formContainer">
            <div className="formHeader">
                <h2>Start Building</h2>
            </div>
            <form id="pizza-form" onSubmit={onSubmit}>
                <label>Name For The Order
                    <input
                        value={values.name}
                        name="name"
                        id="name-input"
                        type="text"
                    />
                </label>
                <label>Select Your Size
                    <select
                        value={values.size}
                        id="size-dropdown"
                        onChange={onChange}
                        name="size"
                    >
                        <option value="">---Size---</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </label>
                <label>Marinara Sauce
                    <input
                        type='radio'
                        name='sauce'
                        value='marinara'
                        onChange={onChange}
                        checked={values.sauce === 'marinara'} 
                    />
                </label>
                <label>Alfredo Sauce
                    <input
                        type='radio'
                        name='sauce'
                        value='alfredo'
                        onChange={onChange}
                        checked={values.sauce === 'alfredo'} 
                    />
                </label>
                <div className="topping">
                    <h4>Select Toppings</h4>
                <label>Pepperoni
                    <input
                        type='checkbox'
                        name='pepperoni'
                        onChange={onChange}
                        checked={values.pepperoni}
                    />
                </label>
                <label>Onions
                    <input
                        type='checkbox'
                        name='onions'
                        onChange={onChange}
                        checked={values.onions}
                    />
                </label>
                <label>Olives
                    <input
                        type='checkbox'
                        name='olives'
                        onChange={onChange}
                        checked={values.olives}
                    />
                </label>
                <label>Artichokes
                    <input
                        type='checkbox'
                        name='artichokes'
                        onChange={onChange}
                        checked={values.artichoke}
                    />
                </label>
                </div>
                <label>Special Instructions
                    <textarea
                        id="special-text"
                        name="special"
                        type="text"
                        maxLength="250"
                        value={values.special}
                        onChange={onChange}
                    />
                </label>
                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
                <Link id= "order-details" to="/order">
                <button id="order-button" type="submit" value= "Submit Order">Submit Order</button>
                </Link>
            </form>
        </div>
    )
}

export default PizzaForm;
