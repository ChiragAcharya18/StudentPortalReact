import React from 'react';
import { Cards } from './Cards'
import { Redirect } from 'react-router-dom';

export const Colleague = (props) => {
    const stds = props.students
    const data = JSON.parse(localStorage.getItem('users'));
    const status = data.status;
    const students = stds.filter((item) => {
        if(item.usn !== status.currentUsn) {
            return item;
        };
    })

    console.log("Colluges: ",students);
    return (
        <>
         { !(data.status.isLogin) && <Redirect to="/login" /> }

            { (data.status.isLogin) && 
            <div className="bodyEle container">
                <div class="card-group mt-2">
                    <div class="row" >
                            {students.map((student) => (
                                <Cards key={student.usn} student={student} /> 
                            ))}
                        </div>
                    </div>
                </div>
        }
        </>
    )
}
