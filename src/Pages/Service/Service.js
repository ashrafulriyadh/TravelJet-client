import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {

	const {name,price,description,img,} = service;


	return (
		<div>
			<div className="col">
	<div className="card hvr-float-shadow h-100">
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body p-4">
    <h4 className="card-title text-dark">{name}</h4>
	<p className="card-text text-dark">{description}</p>
	<h5 className="card-text text-danger text-center">Cost: {price} Taka</h5>
	<Link to={`/placeOrder/${name}`}><button className="btn btn-warning my-3">Book Now <i className="fas fa-arrow-right mx-1"></i></button></Link>
  </div>
</div>
</div>
		</div>
	);
};

export default Service;