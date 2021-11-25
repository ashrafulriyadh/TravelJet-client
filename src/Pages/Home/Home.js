import React from 'react';
import useServices from '../../hooks/useServices';
import './Home.css';
import Service from '../Service/Service';
import useAuth from '../../hooks/useAuth';
import Gallary from '../Gallary/Gallary';

const Home = () => {

	const [services] = useServices();

	//loading spinner
	const {loading} = useAuth();

	return (
		<div>
			<div className=" banner">

			</div>
			{/* banner heading start  */}
			<section>
			<div className="container">
			<h1 className="text-uppercase fw-bold text-center text-white bg-danger heading p-2">Life is short but the world is wide</h1>
				</div>
				<div className="container-fluid d-flex justify-content-center">
				<div className="input-group input-group-lg w-50 custom-margin">
  <input placeholder="Search Destination" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
  <input placeholder="Pax Number" type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
  <input placeholder="Date" type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
  <button className="input-group-text btn btn-warning text-dark" id="search-btn">Search</button>
</div>
       </div>
			</section>

			{/* display services */}
			<section>
				<div className="container service-container">

				<div className="row row-cols-1 row-cols-md-3 g-4">


				{
					services.map(service=> <Service key={service._id}
                        service={service}></Service>)
				}
				</div>

				{
					loading&&
					<div className="d-flex justify-content-center spinner">
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
				</div>
				}
				</div>
			</section>

			{/* gallary start */}
			<section>
			<Gallary></Gallary>
			</section>


			{/* testimonials */}

			<section>

			<div className="container mt-5 mb-5">

				<h1 className="text-center mt-5">Testimonials</h1>
    <div className="row mt-5 g-2">
        <div className="col-md-4">
            <div className="card p-3 text-center px-4 hvr-ripple-in">
                <div className="user-image"> <img src="https://i.imgur.com/PKHvlRS.jpg" className="rounded-circle" alt="" width="80"/> </div>
                <div className="user-content">
                    <h4 className="mb-0 mt-3 ">Bruce Hardy</h4> <span className="text-danger">Traveler</span>
                    <p>I travelled to Bangladesh a few days earlier with TravelJet. I got an  excellent
					service from them. They are very friendly and helpful. I recommended everyone to try out their services. </p>
                </div>
                <div className="ratings"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card p-3 text-center px-4 hvr-ripple-in">
                <div className="user-image"> <img src="https://i.imgur.com/w2CKRB9.jpg" className="rounded-circle" alt="" width="80"/> </div>
                <div className="user-content">
                    <h4 className="mb-0 mt-3">Mark Smith</h4> <span className="text-danger">Traveler</span>
                    <p>I took  Saint Martin Package from their services.Trust me i got the best services ever in my life. I have never imagined such a friendly people like them. Its been a pleasure to be with them. </p>
                </div>
                <div className="ratings"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card p-3 text-center px-4 hvr-ripple-in">
                <div className="user-image"> <img src="https://i.imgur.com/ACeArwY.jpg" className="rounded-circle" alt="" width="80"/> </div>
                <div className="user-content">
                    <h4 className="mb-0 mt-3">Veera Duncan</h4> <span className="text-danger">Travel Agent</span>
                    <p>I worked as a travel agent for them. Im from Russia. Its been a good pleasure to work with them. They are very friendly with our people and their services also are liked by our people.</p>
                </div>
                <div className="ratings"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
            </div>
        </div>
    </div>
</div>

			</section>

			<section>
				<div className="container pt-5">
					<h1 className="text-center fw-bold">
						Frequently Asked Question
					</h1>
				</div>

				<div className="container my-5">
				<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Is there any package for couples?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Yes, Of course.</strong> It There is also package for couples and for family either. We will provide best service for the couples. We also arrange honeymoon package for couples. You may call for an details inquiry.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Is it safe to travel during Covid-19?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Sure it is, we will try our best for maintaining safety</strong> We will provide mask and hand sanitizer during your travel. We also ensure everyone will use covid-19 protection.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Do you take payment by installment ?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>We afraid, we do not have installment policy.</strong> We dont have installment policy but we can manage tour loan from bank if you are interested.
      </div>
    </div>

  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
        Do you have any discount ?
      </button>
    </h2>
    <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Yes we have.</strong> We have always discount available on our website. You can book any packages and have discount from us.
      </div>
    </div>

  </div>
</div>
				</div>
			</section>
		</div>
	);
};

export default Home;