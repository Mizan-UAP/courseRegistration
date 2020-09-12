import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        console.log(course.area);
        total = total + course.area;
    }
   
    return (
        <div>
            <h3>Number of course : {cart.length}</h3>
            <h3>Total payment : {total} Tk.</h3>
        </div >
    );
};

export default Cart;