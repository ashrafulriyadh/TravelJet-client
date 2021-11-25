import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {
	const { name } = useParams();

	const {user} = useAuth();

	//react hook from
	const {register, handleSubmit, reset} = useForm();

	//handle on submit
	const onSubmit = data => {
		axios.post('https://murmuring-reef-14848.herokuapp.com/orders', data)
		.then(res => {
			if (res.data.insertedId) {
				alert('added successfully');
				reset();
			}
		})
	}

	return (
		<div>
			<div className="container order-form">
				<h1 className="text-center my-5 ">
					Place an order
				</h1>

				<div className="row justify-content-center">

				<div className="col-6">
				<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="exampleFormControlInput1" className="form-label">Plan Name : </label>

				<input type="text" className="form-control mb-4" {...register("name")} value={name}/>

				<label htmlFor="exampleFormControlInput1" className="form-label">Email address : </label>
                <input type="email" className="form-control mb-4" {...register("email") }  value={user.email || ''} />
				<label htmlFor="exampleFormControlInput1" className="form-label">Customer Name : </label>
                <input className="form-control mb-4" type="text" {...register("customer_name")} value={user.displayName} />
				<label htmlFor="exampleFormControlInput1" className="form-label">Address : </label>
                <input type="text" className="form-control mb-4" {...register("address")}
				placeholder="Enter Address" />
				<label htmlFor="exampleFormControlInput1" className="form-label">Phone : </label>
				<input type="text" className="form-control mb-4" {...register("phone")}
				placeholder="Enter Phone Number" />
				<input type="text" className="form-control mb-4 d-none" {...register("status")}
				value="pending" />

				<div className="text-center">
				<input className="btn btn-warning mt-3 px-4" type="submit" />
				</div>
            </form>
				</div>
				</div>

			</div>
		</div>
	);
};

export default PlaceOrder;