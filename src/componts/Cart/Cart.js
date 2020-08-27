import React from 'react';
import './Cart.css';

const Cart = (props) => {
    return (
        <div className="course-cart">
            <h1>Course cart</h1>
            <h4>Courses added: {props.newCourse.length}</h4>
            {/* <h4>Total price: {props.newCourse.length}</h4> */}
            <br/>
            <button className="btn btn-dark">Buy now</button>
        </div>
    );
};

export default Cart;