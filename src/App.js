import React, { useState } from 'react';
import './App.css';
import Navbar from './componts/Navbar/Navbar';
import Course from './componts/Course/Course';
import Cart from './componts/Cart/Cart';

function App() {
  const [newCourse, setNewCourse] = useState([])

  const handleAddCourse = (add) => {
    // console.log('added', add)
    const newAdd = [...newCourse, add]
    setNewCourse(newAdd)
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <Cart newCourse={newCourse}></Cart>
      <Course  handleAddCourse={handleAddCourse}></Course>
    </div>
  );
}

export default App;
