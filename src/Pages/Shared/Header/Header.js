import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/travel-logo.png';
import './Header.css';

const Header = () => {

  const {user, logOut} = useAuth();

  const email = user.email;

	return (
		<div>
			<div className="navigation-icon">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-size ">
 		<div className="container ">
   	 <small className="navbar-brand custom-size text-warning mx-3"><i className="fas fa-envelope"></i> info@traveljet.com</small>

	<small className="navbar-brand custom-size text-warning"><i className="fas fa-phone-alt"></i> +8804575789847</small>


    <div className="collapse navbar-collapse justify-content-end d-none d-md-inline" id="navbarNav">
      <ul className="navbar-nav fs-5">
	  <li className="nav-item custom-size">
          <small className="nav-link text-warning" aria-current="page"><i className="fab fa-google mx-1"></i> <i className="fab fa-instagram mx-1"></i> <i className="fab fa-linkedin-in mx-1"></i> <i className="fab fa-twitter mx-1"></i> <i className="fab fa-pinterest me-3"></i></small>
        </li>

      </ul>
    </div>
  </div>
</nav>
			</div>

			<div className="navigation-bar">
			<nav className="navbar navbar-expand-lg navbar-light bg-warning custom-size">
 		<div className="container">
    <Link className="navbar-brand fw-bold text-primary" to="/home"><img className="img-fluid logo" src={logo} alt="logo" width="180" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end my-3" id="navbarNav">
      <ul className="navbar-nav fs-5">
	  <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>

		{
      !user.displayName&&
      <li className="nav-item">
          <Link className="nav-link btn btn-dark rounded-pill text-white mx-3 px-4" aria-current="page" to="/login">Login</Link>
        </li>
    }
    {
      user.displayName&&
      <li className="nav-item">
          <Link className="nav-link active px-4" aria-current="page" to="#">Hello, {user.displayName}</Link>
        </li>
    }
     {
      user.displayName&&
      <li className="nav-item">
          <Link className="nav-link active px-4" aria-current="page" to={`/myOrders/${email}`}>My Order</Link>
        </li>
    }
    {
      user.displayName&&
      <li className="nav-item">
          <Link className="nav-link active px-4" aria-current="page" to="/manageOrder">Manage Order</Link>
        </li>
    }
    {
      user.displayName&&
      <li className="nav-item">
          <Link className="nav-link active px-4" aria-current="page" to="/addService">Add New Service</Link>
        </li>
    }
    {
      user.displayName&&
      <li className="nav-item">
      <Link onClick={logOut} className="nav-link btn btn-dark rounded-pill text-white px-4" aria-current="page" to="#">LogOut <i className="fas fa-sign-out-alt"></i></Link>
    </li>
    }

      </ul>
    </div>
  </div>
</nav>
			</div>
		</div>
	);
};

export default Header;