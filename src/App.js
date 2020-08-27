import React, { useState } from 'react';
import './App.css';
import Navbar from './componts/Navbar/Navbar';
import Course from './componts/Course/Course';
import Cart from './componts/Cart/Cart';

import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  const [newCourse, setNewCourse] = useState([])
  const [cart, setCart] = useState([])

  const handleAddCourse = (add) => {
    // console.log('added', add)
    const newAdd = [...newCourse, add]
    setNewCourse(newAdd)
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <Cart cart={cart} newCourse={newCourse}></Cart>
      <Course  handleAddCourse={handleAddCourse}></Course>
    </div>
  );
}

export default App;
