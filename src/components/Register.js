import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = (props) => {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleFnameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLnameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlMoblieChange = (event) => {
    setMobile(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if(firstname === "" || lastname === "" || email === "" || role === "" || mobile === "" || password === ""){
      alert("Please fill all the fileds.")
    }else{
      axios.post(`${process.env.REACT_APP_API_URL}/users/insert`, {
        firstname, lastname, role, email, password, mobile
      }).then(function (response) {
        if(response.data.status === "SUCCESS"){
          history('/login');
        }else{
          alert(JSON.stringify(response.data))
        }
      }).catch(function (error) {
          alert(error)
      });
    }
    // add your login logic here
  };

        return (
          <div className='container-fluid'>
          <form className='w-50 mx-auto mt-5 border shadow p-5'>
           <h4 className='text-center'>Register</h4> 
          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" className="form-control" value={firstname} onChange={handleFnameChange} />
          </div>
          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" className="form-control" value={lastname} onChange={handleLnameChange} />
          </div>
          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="email">Email address</label>
            <input type="email" id="email" className="form-control" value={email} onChange={handleEmailChange} />
          </div>
          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="role">Role</label>
            <select className="form-control" htmlFor="role" value={role}  onChange={handleRoleChange}>
            <option value="">Select..</option>
            <option value="guest">guest</option>
            <option value="owner">owner</option>
            </select>
          </div>
          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="mobileno">Phone number</label>
            <input type="text" id="mobileno" className="form-control" value={mobile} onChange={handlMoblieChange} />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">Password</label>
            <input type="password" id="form2Example2" className="form-control" value={password} onChange={handlePasswordChange} />
          </div>
         
          <button type="button" className="btn btn-primary btn-block mb-4 mx-auto d-block" onClick={handleLogin}>Sign Up</button>
        
          <div className="text-center">
            <p className='mb-0'>Already Registered? </p>
            <NavLink to={'/login'}>Login</NavLink>
          </div>
        </form>
        </div>
        );
};


export default Register;