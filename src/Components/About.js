import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHome, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

export const About = () => {
    const data = JSON.parse(localStorage.getItem('users'));
    return (
        <div className="container bodyEle" > <br />
           <div class="jumbotron text-center">
                <h1 class="display-3"><strong>About Us</strong></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dicta rerum laudantium
                     repellendus natus neque sapiente eius totam nisi, odio officiis alias corporis vero
                      incidunt eum reiciendis. Minus, ea unde!</p>
                <p class="lead"><strong>Please check your email</strong> for further instructions on how to complete your account setup.</p>
                <hr />
                <p>
                    Having trouble? <Link onClick={(e) => {
                        e.preventDefault();
                        alert("...");
                    }} style={{textDecoration: "none"}}> Contact us</Link>
                </p>
                <p class="lead">
                   { data.status.isLogin && <Link class="btn btn-success text-white btn-sm" to="/login" role="button"><FontAwesomeIcon icon={faHome} /> Home Page</Link>}
                   { !data.status.isLogin && <Link class="btn btn-success text-white btn-sm" to="/login" role="button"><FontAwesomeIcon icon={faSignInAlt} /> Login Page</Link>}
                </p>
                </div>
        </div>
    )
}
