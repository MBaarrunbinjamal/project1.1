import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MyValue } from "./Context";

function Hero () {

		var [record,setrecord]= useState([])
		
		var [mydata,setdata]= useState({})
	useEffect(()=> {
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(rec => rec.json())
		.then(data => setrecord(data))
	})
		function Send(){

	var a= document.getElementById('abc')
	fetch('https://jsonplaceholder.typicode.com/posts'+a)
		.then(rec => rec.json())
		.then(data => setdata(data))

	}
	var a =useContext(MyValue)
    return (
       <>
       	<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
			
								<input className="form-control" type="number" id="abc"/>
								<button className="btn btn-success" onClick={Send}>submit</button>
								
				
								{/* <p className="mb-4">{mydata}</p> */}
								<p><Link className="btn btn-secondary me-2" to="/Shop">Shop Now</Link><a href="#" className="btn btn-white-outline">Explore</a></p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src = {a} className="img-fluid"/>
							</div>
						</div>
					</div>
				</div>
			</div>
       </>
    );
}
export default Hero;