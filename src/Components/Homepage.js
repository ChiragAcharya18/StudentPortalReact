import React from 'react';
import '../App.css';
import imgLogo from '../assets/profile.png'
import { Redirect } from 'react-router-dom';

export const Homepage = (props) => {

    const data = JSON.parse(localStorage.getItem('users'));
    const you = data.status;
    const stds = props.students;
    var std;
    for (let i = 0; i < stds.length; i++) {
        if (you.currentUsn === stds[i].usn) {
            std = stds[i];
            break;
        }
    }
    console.log(std);

    var cardStyle = {
        width: "23rem",
    }
    var imgStyle = {
        height: "50%",
        width: "60%",
    }

    return (
        <>

            {!(data.status.isLogin) && <Redirect to="/login" />}

            {(data.status.isLogin) &&

                <div className="bodyEle container my-5" style={cardStyle}>
                    <div>
                        <div className="container card mt-5 mb-5" style={cardStyle}>
                            <img src={imgLogo} className="container card-img-top" alt="ProfileImage" style={imgStyle} />
                            <div className="card-body">
                                <h6 className="card-title"><strong>Name </strong><br /> {std.name}</h6>
                                <h6 className="card-title"><strong>USN </strong><br />{std.usn.toUpperCase()}</h6>
                                <h6 className="card-title"><strong>Email </strong><br />{std.email}</h6>
                                <h6 className="card-title"><strong>Description </strong> </h6>
                                <p style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt reprehenderit quo maxime exercitationem, 
                                maiores,adipisci dignissimos quos excepturi.</p>  
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
