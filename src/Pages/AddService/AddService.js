import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './AddService.css';

const AddService = () => {

	const {register, handleSubmit, reset} = useForm();

	const onSubmit = data => {

		axios.post('https://murmuring-reef-14848.herokuapp.com/services', data)
		.then(res => {
			if (res.data.insertedId) {
				alert('added successfully');
				reset();
			}
		})
	}

	return (
		<div>
			<div className="container service-form">
				<h1 className="text-center my-5 ">
					Add a new Service
				</h1>

				<div className="row justify-content-center">

				<div className="col-6">
				<form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control mb-4" {...register("name")} placeholder="Name" />
                <textarea className="form-control mb-4" {...register("description")} placeholder="Description" />
                <input className="form-control mb-4" type="number" {...register("price")} placeholder="price" />
                <input className="form-control mb-4" {...register("img")}
				placeholder="image url" />

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

export default AddService;