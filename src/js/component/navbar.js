import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    console.log(store.favs);
	

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">
                    <img style={{ width: "80px" }} src="https://th.bing.com/th/id/OIP.mbGsTo42CdkrNPADR_D8YgHaEK?rs=1&pid=ImgDetMain" alt="" />
                </span>
            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                        {store.favs.length > 0 ? (
                            store.favs.map((fav, index) => (
                                <li key={index} className="d-flex align-items-center">
                                    <Link className="dropdown-item" to={`/${fav.type}info/${fav.uid}`}>
                                        {fav.name}
                                    </Link>
                                </li>
                            ))
                        ) : (
                            <li className="dropdown-item text-center">No favorites added</li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
