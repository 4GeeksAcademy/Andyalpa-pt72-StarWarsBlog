import React from "react";

import "../../styles/home.css";
import PeopleCards from "../component/PeopleCards";
import PlanetCards from "../component/PlanetCards";
import StarshipsCards from "../component/StarshipCards";


export const Home = () => (
	<div>
		<div className="text-center mt-5">
		<PeopleCards />
		<PlanetCards />
		<StarshipsCards />
	</div>
	</div>
	
);

//Maybe I can Add the fetch from flux and access the info from there and pass it to navbar and the cards
