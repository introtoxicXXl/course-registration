import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';

Courses.propTypes = {

};

function Courses() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='w-3/4 grid md:grid-cols-3 gap-4'>
        {
            courses.map(course=><Course 
            key={course.id}
            course={course}
            ></Course>)
        }
        </div>
    );
}

export default Courses;