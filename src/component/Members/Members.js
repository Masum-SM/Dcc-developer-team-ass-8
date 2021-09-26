import React from 'react';
import './Member.css'
const Members = (props) => {
    // destructuring 
    const { name, id, age, jobPlace, batch, moneny, img } = props.member;


    return (
        <div className='members-container'>
            <div className='member-cart'>
                <div className='cart-header'>
                    <div className="member-cartHeader">
                        <div>
                            <img src={img} alt="" />
                        </div>
                        <h3 className='member-name' >{name}</h3>
                    </div>
                </div>

                <div className="member-body">

                    <div className='member-info'>
                        <h4>ID: {id}</h4>
                        <p> <small> Age: {age}</small></p>
                        <p> <small>Job Place: {jobPlace}</small></p>
                        <p><small> Batch: {batch}</small></p>
                        <p><small> Monthly Allotment: {moneny}</small></p>
                    </div>

                    <div className='icon'>

                        <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://in.linkedin.com/company/linkedin"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://www.whatsapp.com/"><i className="fab fa-whatsapp"></i></a>
                        <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>

                    </div>


                </div>
                <div>
                    <div>

                    </div>
                    <button
                        // click handler 
                        onClick={() => props.handleCart(props.member)}
                        className='member-btn'><i className="fas fa-shopping-cart"></i> Add To Cart</button>
                </div>
            </div>

        </div>
    );
};

export default Members;