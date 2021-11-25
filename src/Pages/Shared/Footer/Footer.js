import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
	return (
		<div className="mt-5">
			<footer className="site-footer">
         <div className="container bg-warning flex-grow-1 flex-shrink-0 mb-5">
    <div className="px-lg-5">
      <div className="row py-5">
        <div className="col-lg-12 mx-auto text-white text-center">
          <h1 className="display-4">Subscribe Our Newsletter</h1>
          <div className="container-fluid mt-3 d-flex justify-content-center">
				<div className="input-group input-group-lg w-50">
  <input placeholder="Enter your email" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
  <button className="input-group-text btn btn-dark text-white" id="search-btn">Submit</button>
</div>
       </div>
        </div>
      </div>
    </div>
  </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>TravelJet - A leading Travel Booking Website</h6>
            <p className="text-justify">The professional standard and the expertise on traveling facilities are the pillars of success of TravelJet. It is noticeable that a gap exists between travelers expectations and provided travel services in Bangladesh. As a result, a remarkable number of people go abroad to travel. </p>
          </div>

          <div className="col-xs-6 col-md-3 links">
            <h6>Partners</h6>
            <ul className="footer-links ">
              <li><Link className="text-decoration-none"to="#">Booking</Link></li>
              <li><Link className="text-decoration-none" to="#">RentalCar</Link></li>
              <li><Link className="text-decoration-none" to="#">HostelWorld</Link></li>
              <li><Link className="text-decoration-none" to="#">GoZayaan</Link></li>
              <li><Link className="text-decoration-none" to="#">Trivago</Link></li>
              <li><Link className="text-decoration-none" to="#">TripAdvisor</Link></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3 links">
            <h6>Support</h6>
            <ul className="footer-links">
			<li><Link className="text-decoration-none" to="#">Account</Link></li>
              <li><Link className="text-decoration-none" to="#">Legal</Link></li>
              <li><Link className="text-decoration-none" to="#">Contact Us</Link></li>
              <li><Link className="text-decoration-none" to="#">Affiliate Program</Link></li>
              <li><Link className="text-decoration-none" to="#">Privacy Policy</Link></li>
              <li><Link className="text-decoration-none" to="#">Terms & Condition</Link></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
         <Link className="text-decoration-none" to="#"> Ashraful</Link>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><Link className="facebook" to="#"><i className="fa fa-facebook"></i></Link></li>
              <li><Link className="twitter" to="#"><i className="fa fa-twitter"></i></Link></li>
              <li><Link className="dribbble" to="#"><i className="fa fa-dribbble"></i></Link></li>
              <li><Link className="linkedin" to="#"><i className="fa fa-linkedin"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
</footer>
		</div>
	);
};

export default Footer;