import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import img1 from "../assets/nav2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

export const Navbar = (props) => {
    var history = useHistory();
    const data = JSON.parse(localStorage.getItem('users'));
    const onSignout = (e) => {
        e.preventDefault()
        if(props.signout()) {
            // alert("Signout Successfull");
            history.push("/");
        }
    }
    return (
       <> 
            <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-danger">
            <div className="container-fluid">
                <Link className="navbar-brand text-light my-2" to="#"> <img src={img1} alt="NavLogo" width="38" height="32" style={{marginRight:"12px"}} />
                {!data.status.isLogin && "Hey there!" } {data.status.isLogin &&  "Hello " + data.status.currentUser }</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {data.status.isLogin && <> <li className="nav-item">
                    <Link className="nav-link text-light active" aria-current="page" to="/homepage"><strong>Home</strong></Link>
                    </li> 
                    <li className="nav-item">
                    <Link className="nav-link text-light" to="/colleagues"><strong>Collagues</strong></Link>
                    </li> </> }
                    <li className="nav-item">
                    <Link className="nav-link text-light" to="/about"><strong>About</strong></Link>
                    </li>
                </ul>
                {data.status.isLogin &&  
                <form className="d-flex">
                <button className="btn btn-outline-light" type="button" onClick={onSignout}><FontAwesomeIcon icon={faSignOutAlt} /> Sign Out</button>
                </form> } 
                
                </div>
            </div>
            </nav>
       </>
    )
}



