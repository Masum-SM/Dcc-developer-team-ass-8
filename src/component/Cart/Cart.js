import React from 'react';
import CartMember from '../CartMember/CartMember';
import './Cart.css'

const Cart = (props) => {
    // destructuring 
    const { cart } = props

    let amount = 0
    let addedMemeberName = []

    for (const member of cart) {
        amount = amount + member.moneny
        addedMemeberName.push(member.name)

    }


    return (
        <div className="calculed-cart" >

            <h3 className='member-len'>Members Added: {cart.length}  </h3>
            <h4>Amount: {amount}</h4>
            <div>
                {
                    // using map 

                    cart.map(name => <CartMember
                        key={name.id}
                        name={name.name}
                        img={name.img}
                    ></CartMember>



                    )
                }
            </div>




        </div>
    );
};

export default Cart;