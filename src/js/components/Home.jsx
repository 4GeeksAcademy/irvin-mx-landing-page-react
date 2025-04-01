import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid m-0 p-0 vh-100">
			{/* Navbar */}
			<Navbar/>

			{/* Container */}
			<Jumbotron/>

			{/* Footer */}
			<Footer/>
		</div>
	);
};

export default Home;