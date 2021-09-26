import React, { useEffect, useState } from 'react';
import './Team.css'
import Members from '../Members/Members';
import Cart from '../Cart/Cart'

const Team = () => {

    const [members, setMembers] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./teamMember.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])

    const handleCart = (member) => {

        const newMember = [...cart, member];
        setCart(newMember)

    }
    return (
        <div>
            <h2>Total Amount: 54700</h2>
            <div className="team-container">
                <div className="members">
                    {
                        // using map function $calling component and passing vlaue.
                        members.map(member => <Members
                            key={member.id}
                            member={member}
                            handleCart={handleCart}

                        ></Members>)
                    }


                </div>
                <div className="cart">
                    <Cart cart={cart}></Cart>
                </div>


            </div>




        </div>
    );
};

export default Team;