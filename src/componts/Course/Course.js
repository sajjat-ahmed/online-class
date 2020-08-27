import React from 'react';
import courses from '../../fakeData/course';
import { useState } from 'react';
import CourseList from '../CourseList/CourseList';
import './Course.css';
import Cart from '../Cart/Cart';


const Course = (props) => {
    const [course, setCourse] = useState(courses)


    return (
        <div>
            {
                course.map(course => <CourseList handleAddCourse={props.handleAddCourse} course={course}></CourseList>)
            }
        </div>
    );
};

export default Course;