import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const PlanetsCards = () => {
    const [planets, setPlanets] = useState([]);
    const { store, actions } = useContext(Context);

    useEffect(() => {
        async function getPlanets() {
            let res = await fetch("https://www.swapi.tech/api/planets");
            let data = await res.json();
            setPlanets(data.results);
        }
        getPlanets();
    }, []);

    const handleClick = (e, planet) => {
        e.preventDefault();
        if (store.favs.some(fav => fav.uid === planet.uid && fav.type === "planet")) {
            actions.removeFavs({uid: planet.uid, type: "planet"});
        } else {
            actions.addFavs(planet, "planet");
        }
    };

    return (
        <div className="d-flex col-10 overflow-auto mt-5 mx-auto">
            {planets?.map((planet, index) => (
                <div key={index} className="card m-2" style={{ minWidth: "18rem", borderRadius: "1.25rem", boxShadow: "0px 0px 10px 3px rgba(0,0,0,0.1)" }}>
                    <img style={{ borderRadius: "1.25rem" }} src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="img-fluid" />
                    <div className="card-body">
                        <h5 className="card-title">{planet.name}</h5>
                        <Link style={{ borderRadius: "1.25rem" }} to={`/planetinfo/${planet.uid}`} className="btn btn-primary me-5">More info</Link>
                        <a onClick={(e) => handleClick(e, planet)} style={{ borderRadius: "1.25rem" }} href="#" className="btn btn-warning ms-5">
                        <i className={store.favs.some(fav => fav.uid === planet.uid && fav.type === "planet") ? "fa fa-regular fa-heart test" : "fa fa-solid fa-heart"}></i>

                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PlanetsCards;
