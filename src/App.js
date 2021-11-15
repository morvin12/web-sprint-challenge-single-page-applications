import React, { useState, useEffect } from "react";
import { Link, Switch, Route } from 'react-router-dom';
import "./App.css";
import axios from "axios";
import * as yup from 'yup';
import schema from './Validation/formSchema';

import PizzaForm from "./Components/PizzaForm";
import Home from "./Components/Homepage";
import Order from "./Components/Order";

const initialFormValues = {
  name: "",
  size: "",
  sauce: "",
  topping: {
    pepperoni:false,
    onions:false,
    olives:false,
    artichoke:false,
},
  special: "",
};

const initialOrders =[]
const initialDisabled =true


const App = () => {

  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState("")
  const [disabled, setDisabled] = useState(initialDisabled)

  const getOrders = () => {
    axios.get('https://reqres.in/api/orders')
       .then(res => {
        setOrders(res.data);
        })
       .catch(err => console.error(err))
  } 

  const postPizzaOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrders( [res.data, ...orders] );
      })
      .catch(err => console.error(err))
      .finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]: '' }))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: ['pepperoni', 'onions', 'olives', 'artichokes'].filter(topping => !!formValues[topping]),
      special: formValues.special.trim(),
    };

    postPizzaOrder(newOrder);
  }

 useEffect(() => {
    getOrders()
  }, [])
  
 
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues])


  return (
  <div>
    <div className="navigation">
      <h1>Lambda Eats</h1>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/pizza">Order Pizza</Link>
      <Link to="/completion">Completion</Link>
      </nav>
    </div>

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pizza">
        <PizzaForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        />
      </Route>
      <Route path="/order">
        <Order details={orders} />
      </Route>
    </Switch>
  </div>

  );
};

export default App;
