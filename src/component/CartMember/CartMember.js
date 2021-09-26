import React from 'react';
// updating css file 
import './CartMember.css'

const CartMember = (props) => {
    return (
        <div className='cart-member'>
            <img src={props.img} alt="" />
            <h2>{props.name}</h2>

        </div>
    );
};

export default CartMember;