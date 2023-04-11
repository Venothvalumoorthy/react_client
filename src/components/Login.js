import { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../store/auth-context';


const Login = () => {

  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authCtx = useContext(AuthContext);


  const handleSubmit = (event) => {
    event.preventDefault();
    if(email === "" || password === ""){
      alert("Please enter all the fields.")
    }else{
      axios.post(`${process.env.REACT_APP_API_URL}/users/login`, {
         email, password
      }).then(function (response) {
          if(response.data.status === "SUCCESS"){
            authCtx.login(response.data.token, JSON.stringify(response.data.users[0]));
            history('/');
          }else{
            alert(response.data.errors)
          }
      }).catch(function (error) {
        alert(error)
      });
    }
  };

  return (<div className='container-fluid'>
    <form className='w-50 mx-auto mt-5 border shadow p-5'>
      <h4 className='text-center'>Login</h4>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form2Example1">Email address</label>
        <input type="email" id="form2Example1" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)}  />
      </div>

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form2Example2">Password</label>
        <input type="password" id="form2Example2" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>


      <button type="button" className="btn btn-primary btn-block mb-4 mx-auto d-block" onClick={handleSubmit}>Sign in</button>

      <div className="text-center">
        <p className='mb-0'>Not a member?</p>
        <NavLink to={'/register'}>Register</NavLink>
      </div>
    </form>
  </div>

  );
}



export default Login;

