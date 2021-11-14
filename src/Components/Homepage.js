import React from "react";
import { Link } from 'react-router-dom'
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
            <Link to="/pizza" id="order-pizza">
            <h2>Start Your Custom Order</h2>
            </Link>
            </nav>
        </div>
    )
}
export default Home;
