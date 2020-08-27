import React from 'react';
import './CourseList.css';

const CourseList = (props) => {
    const { img, name, price } = props.course;
    const handleAddCourse = props.handleAddCourse;
    return (
        <div>
            <div className="course-list">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="title">
                    <h2>{name}</h2>
                    <h1>{price}$</h1 >
                    <button className="btn btn-dark" onClick={() => handleAddCourse(props.course)}>Enroll now</button>
                </div>
            </div>
        </div>
    );
};

export default CourseList;