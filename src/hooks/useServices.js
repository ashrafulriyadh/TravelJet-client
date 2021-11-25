import { useEffect, useState } from "react";

const useServices = () => {
	const [services, setServices] = useState([]);

	//fetch data from api

	useEffect(() => {
		fetch('https://murmuring-reef-14848.herokuapp.com/services')
		.then(res=> res.json())
		.then(data=>setServices(data),)
	},[]);
	return [services, setServices];
}

export default useServices;