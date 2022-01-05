import React, { useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom';


export const Login = (props) => {
    let history = useHistory();
    
    const data = JSON.parse(localStorage.getItem('users'));
    var cardStyle={
        width: "23rem"
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        let s = props.login(email, password);
        if(s) {
            history.push("/homepage");
        } else {
            alert("Wrong Login Credential");
        }
    }

    return (
            <div className="bodyEle" > 
             {(!data.status.isLogin) && 
            <div >
                <div className="container card mt-5 mb-5" style={cardStyle}>
                    <div className="card-body ">
                    <form className="container" onSubmit={onLogin}>    
                        <h2><strong>Login</strong></h2>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-block m-2 btn-primary"> <b>Login</b> </button>
                            <button type="button" className="btn btn-outline-danger m-2" onClick={ (e) => { 
                                e.preventDefault();
                                history.push("/signup")}}> <b>Signup</b> </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div> }
            { (data.status.isLogin) && <Redirect to="/homepage" /> }
            </div>
    )
}
