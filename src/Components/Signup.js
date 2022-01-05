import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

export const Signup = (props) => {
    const history = useHistory();
    const [signedup, setSignedup] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [usn, setUsn] = useState('');
    const [password, setPassword] = useState('');
    const data = JSON.parse(localStorage.getItem('users'));
    const onSignup = (e) => {
        e.preventDefault();
        const std = {
            name: name,
            usn: usn.toLowerCase(),
            email: email,
            password: password,
            details: [],  
        }
        let s = props.signup(std);
        if(s) {
            setSignedup(true)
            // history.push("/login");
        } else {
            alert("Signup Failed");
        }

    }

    useEffect(() => {
        setTimeout(() => {
            setSignedup(false)
        },2000);
      },[signedup]);
    

    return (
        <div className="bodyEle">
            { (data.status.isLogin) && <Redirect to="/homepage" /> }
            {signedup &&   <>
                    <hr /><div className="container alert alert-success" role="alert">
                    <b> Signup Successful! </b>You can login with the same credentials now! <br /> <Link to="/login">Login</Link> </div>
                 </>
                 }
            <div className="card container mt-5 mb-5" style={{width: "29rem"}}>
            <div className="card-body">
                <h2><strong>Signup</strong></h2>
                <form onSubmit={onSignup}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="John Doe" value={name} onChange={(e) => {setName(e.target.value)}}  required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => {setEmail(e.target.value)}}  required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="usn" className="form-label">USN</label>
                    <input type="text" className="form-control" id="usn" placeholder="4MT17XXXXX" value={usn} onChange={(e) => {setUsn(e.target.value)}} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => {setPassword(e.target.value)}} required/>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-danger m-2 "><b>Signup</b> </button>
                    <button className="btn btn-outline-primary m-2 " onClick={ (e) => {
                        e.preventDefault();
                        history.push("/login")} }> <b>Login</b> </button>
                </div>
                </form>
                </div>
            </div>
        </div>
    )
}
