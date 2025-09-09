import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";


const Home = () => {
	return (
		<div>
            <Navbar/>
			<div className="container">
				<Jumbotron/>
				<br/>
				<Card/>
				<br/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;