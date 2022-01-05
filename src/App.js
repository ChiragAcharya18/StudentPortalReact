import './App.css';
import {Login} from "./Components/Login.js";
import { BrowserRouter as Router, Switch,  Route,  Redirect } from "react-router-dom";
import { Signup } from './Components/Signup';
import { Homepage } from './Components/Homepage';
import { useState } from 'react/cjs/react.development';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Colleague } from './Components/Colleague';
import { About } from './Components/About';

function App() {
  
  const[isLogin, setIsLogin] = useState();
  const [currentUser, setCurrentUser] = useState('');
  const [currentUsn, setCurrentUsn] = useState('');

var data = JSON.parse(localStorage.getItem('users'))
if(data === null) {
  data = {
    status: {
      isLogin: false,
      currentUser: '',
      currentUsn: ''
    },
    students: [
      {
        name: "admin",
        usn: "S001",
        email: "admin@gmail.com",
        password: "1234",
        details: []
      },
      {
        name: "Shashank",
        usn: "s002",
        email: "shashank@gmail.com",
        password: "1234",
        details: []
      },
      {
        name: "Manthan",
        usn: "s003",
        email: "manthan@gmail.com",
        password: "1234",
        details: []
      }
    ]
  }
  localStorage.setItem('users', JSON.stringify(data));
}

  var loginStatus = data.status;
  var students = data.students;

  const inStudent = (usn, email) => {
      for(let i=0;i<students.length; i++) {
        if(students[i].usn === usn || students[i].email === email) {
          return false;
        }
      }
      return true
  }

  // console.log(students);
  // Login Logic
  const onLogin = (email, password) => {
        console.log(students);
        for(let i=0;i<students.length;i++) {
          if(students[i].email === email && students[i].password === password) {
            setIsLogin(true);
            setCurrentUser(students[i].name);
            setCurrentUsn(students[i].usn);

            data = {
              status: {
                isLogin: true,
                currentUser: students[i].name,
                currentUsn: students[i].usn
              },
              students: students
            }
            localStorage.setItem('users', JSON.stringify(data));

            return true;
          }
        }
        return false;
  }

  // Register user logic
  const onSignup = (std) => {
      console.log(std);
      if(!inStudent(std.usn, std.email)) {
        return false
      }
      try {
        students.push(std);
        data = {
          status: {
            isLogin: false,
            currentUser: '',
            currentUsn: ''
          },
          students: students
        }
        localStorage.setItem('users', JSON.stringify(data));
        return true;
      } catch (error) {
        console.log("signup error while push : "+ error);
        return false;
      }  
  }

  //Logout logic
  const onSignout = () => {
            setIsLogin(false);
            setCurrentUser('');
            setCurrentUsn('');
            data = {
              status: {
                isLogin: false,
                currentUser: '',
                currentUsn: ''
              },
              students: students
            }
            localStorage.setItem('users', JSON.stringify(data));

            return true;
  }


  

  return (
    <> 
    <Router>
      <Navbar  status={loginStatus} signout={onSignout}/>

      <Switch>
        <Route  exact path="/"> 
          <Login student={students} status={loginStatus} login={onLogin}/>
        </Route>
        <Route path="/signup"> 
          <Signup signup={onSignup} />
        </Route> 
        <Route path="/homepage"> 
          <Homepage status={loginStatus} students={students}  />
        </Route> 
        <Route path="/colleagues"> 
            <Colleague students={students} status={loginStatus} />
        </Route> 
        <Route path="/about"> 
            <About />
        </Route> 
        <Redirect to="/" />
      </Switch>

      <Footer />
    </Router>
    </>
  );
}

export default App;


