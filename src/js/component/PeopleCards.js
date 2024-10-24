import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const PeopleCards = () => {
    const [people, setPeople] = useState([]);
    const { store, actions } = useContext(Context);

    useEffect(() => {
        async function getPeople() {
            let res = await fetch("https://www.swapi.tech/api/people");
            let data = await res.json();
            setPeople(data.results);
        }
        getPeople();
    }, []);

    const handleClick = (e, person) => {
        e.preventDefault();
        if (store.favs.some(fav => fav.uid === person.uid && fav.type === "person")) {
            actions.removeFavs({ uid: person.uid, type: "person"});
        } else {
            actions.addFavs(person, "person");
        }
    };

    return (
        <div className="d-flex col-10 overflow-auto mt-5 mx-auto">
            {people?.map((person, index) => (
                <div key={index} className="card m-2" style={{ minWidth: "18rem", borderRadius: "1.25rem", boxShadow: "0px 0px 10px 3px rgba(0,0,0,0.1)" }}>
                    <img style={{ borderRadius: "1.25rem" }} src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`} className="img-fluid" />
                    <div className="card-body">
                        <h5 className="card-title">{person.name}</h5>
                        <Link style={{ borderRadius: "1.25rem" }} to={`/peopleinfo/${person.uid}`} className="btn btn-primary me-5">More info</Link>
                        <a onClick={(e) => handleClick(e, person)} style={{ borderRadius: "1.25rem" }} href="#" className="btn btn-warning ms-5">
                        <i className={store.favs.some(fav => fav.uid === person.uid && fav.type === "person") ? "fa fa-regular fa-heart test" : "fa fa-solid fa-heart"}></i>

                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PeopleCards;
