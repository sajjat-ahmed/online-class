import React from 'react';
import './Cart.css';

const Cart = (props) => {
    return (
        <div className="course-cart">
            <h1>Course cart</h1>
            <h4>Courses added: {props.newCourse.length}</h4>
            <h4>Total price: </h4>
        </div>
    );
};

export default Cart;