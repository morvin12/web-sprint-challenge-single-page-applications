import React from "react";
import { Link } from 'react-router-dom'
import "../App.css"

const Home = () => {
    return (
        <div className="homepage">
            <nav>
            <h2>Lambda Coded Pizza</h2>
            </nav>
            <h2>Want Pizza?</h2>
            <nav>
            <Link to="/pizza" id="order-pizza">
            <h3>Start Your Custom Order Here </h3>
            </Link>
            </nav>
        </div>
    )
}
export default Home;
