import React from "react";
import { link } from 'react-router-dom'
import "../App.css"

const Home = () => {
    return (
        <div className="homepage">
            <nav>
            <h1>Lambda Coded Pizza</h1>
            <Link to="/">Home</Link>
            </nav>
            <h2>Time to Eat?</h2>
            <nav>
            <h2>Start Your Custom Order</h2>
            <Link id="order-pizza" to="/pizza" />
            </nav>
        </div>
    )
}
export default Home;
