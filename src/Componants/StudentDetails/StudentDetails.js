import React from 'react';
import './StudentDetails.css'


const StudentDetails = (props) => {
    const info = props.studentInfo;

    return (
        <div className="StudentDetailsInfo">

            <div className="course">
                <h1 className="Topic">Course Name: {info.name}</h1>
                <h3>Price: {info.area} Tk.</h3>
                <h3>Capital: {info.capital}</h3>
                <h3>Population: {info.population}</h3>
                <button className="btn" onClick={() => props.handleAddCourse(info)}>Enroll me</button>

            </div>
        </div>

    );
};

export default StudentDetails;