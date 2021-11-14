import React, { useState, useEffect } from "react";
import { link, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
  <div>
    <div className="navigation">
      <h1>Lambda Eats</h1>
      <nav>
      <link to="/">Home</link>
      <link to="/pizza">Order Pizza</link>
      <link to="/completion">Completion</link>
      </nav>
    </div>

    <Switch>
      <Route path="/pizza">
        <PizzaForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/order">
        <Order details={orders} />
      </Route>
    </Switch>
  </div>

  );
};
export default App;
