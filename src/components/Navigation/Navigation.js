import { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const Navigation = () => {
  const authCtx = useContext(AuthContext);
  const history = useNavigate();

  const handleLogout = ()=>{
    authCtx.logout();
    history('/login');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
    <h4>Guest Booking Site</h4>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <button   className="nav-link active btn" onClick={handleLogout}>Logout</button>
          </li>
          {/* <li className="nav-item">
          <NavLink to={"/register"}  className="nav-link active">Sign Up</NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navigation;
