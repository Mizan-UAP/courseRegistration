
import React, { useState, useEffect } from 'react';
import './StudentsName.css';
import StudentDetails from '../StudentDetails/StudentDetails';
import Cart from '../Cart/Cart';


const StudentsName = () => {
    const [student, setStudent] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => {
                const newData = data.slice(0, 15);
                setStudent(newData);
            }
            )
    }, [])

    const handleAddCourse = (studentInfo) => {
        const newCart = [...cart, studentInfo];
        setCart(newCart);
    }


    return (
        <div className="courseDetails">

            <div className="studentInfo">
                {
                    student.map(std => <StudentDetails studentInfo={std} handleAddCourse={handleAddCourse} ></StudentDetails>)

                }
            </div >
            <div className="courseInfo">
                <h2 className="cart">Course Details Enrolled</h2>

                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default StudentsName;