import { useEffect, useState } from "react";

const useServices = () => {
	const [orders, setOrders] = useState([]);

	//fetch data from api

	useEffect(() => {
		fetch('https://murmuring-reef-14848.herokuapp.com/orders')
		.then(res=> res.json())
		.then(data=>setOrders(data))
	},[]);
	return [orders, setOrders];
}

export default useServices;