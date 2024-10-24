import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const StarshipsCards = () => {
    const [starships, setStarships] = useState([]);
    const { store, actions } = useContext(Context);

    useEffect(() => {
        async function getStarships() {
            let res = await fetch("https://www.swapi.tech/api/starships");
            let data = await res.json();
            setStarships(data.results);
        }
        getStarships();
    }, []);

    const handleClick = (e, starship) => {
        e.preventDefault();
        if (store.favs.some(fav => fav.uid === starship.uid && fav.type === "starship")) {
            actions.removeFavs({uid: starship.uid, type: "starship"});
        } else {
            actions.addFavs(starship, "starship");
        }
    };

    return (
        <div className="d-flex col-10 overflow-auto mt-5 mx-auto">
            {starships?.map((starship, index) => (
                <div key={index} className="card m-2" style={{ minWidth: "18rem", borderRadius: "1.25rem", boxShadow: "0px 0px 10px 3px rgba(0,0,0,0.1)" }}>
                    <img style={{ borderRadius: "1.25rem" }} src={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`} className="img-fluid" />
                    <div className="card-body">
                        <h5 className="card-title">{starship.name}</h5>
                        <Link style={{ borderRadius: "1.25rem" }} to={`/starshipinfo/${starship.uid}`} className="btn btn-primary me-5">More info</Link>
                        <a onClick={(e) => handleClick(e, starship)} style={{ borderRadius: "1.25rem" }} href="#" className="btn btn-warning ms-5">
                        <i className={store.favs.some(fav => fav.uid === starship.uid && fav.type === "starship") ? "fa fa-regular fa-heart test" : "fa fa-solid fa-heart"}></i>

                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StarshipsCards;
