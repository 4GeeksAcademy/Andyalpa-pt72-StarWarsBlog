const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            favs: []
        },
        actions: {
            addFavs: (fav, type) => {
                const store = getStore();
                setStore({ favs: [...store.favs, {...fav, type}] });
            },
            removeFavs: (fav) => {
                const store = getStore();
                const newFavs = store.favs.filter(favorite => favorite.uid !== fav.uid || favorite.type !== fav.type);
                setStore({ favs: newFavs });
            },












			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
