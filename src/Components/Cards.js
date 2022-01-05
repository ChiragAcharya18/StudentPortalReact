import React from 'react';
import './css/Cards.css';
import profile from '../assets/profile.png'

export const Cards = (props) => {
    const std = props.student;
    return (
        
        <div class="col-lg-3 col-md-6 col-sm-12 item p-3" >
        <div class="item">
            <div class="card cardX item-card card-block p-3">
                <img src={profile} className="container cardImg" alt="Card DisplayImage" />
                <h5 class="card-title  mt-3 mb-3">{std.name}</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, optio.</p>
                <h6 className="card-title"><strong>Name: </strong>{std.name}</h6>
                <h6 className="card-title"><strong>USN: </strong>{std.usn.toUpperCase()}</h6>
                <h6 className="card-title"><strong>Email: </strong>{std.email}</h6>
            </div>
        </div>  
        </div>           
    )
}
