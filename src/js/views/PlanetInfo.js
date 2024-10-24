import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PlanetInfo = () => {
    const {uid} = useParams()
    const [info, setInfo] = useState({})

    //something is failing at the time of passing the id or uid the display data, updated: fixed

    useEffect(() => {
        async function getInfo() {
          let res = await fetch(`https://www.swapi.tech/api/planets/${uid}`)
          let data = await res.json()
          console.log(data);
          console.log(data.result);
          setInfo(data.result)
         
        }
        getInfo()
        console.log(info)
      }, [uid])

    return ( 
        <div>
          <div  className="card mb-3 m-5" style={{minWidth: "540px", borderRadius: "1.25rem", boxShadow: "0px 0px 30px 7px rgba(0,0,0,0.1)"}}>
  <div className="row g-0">
    <div style={{"border-radius": "20px !important"}} className="col-md-4">
      <img  src={`https://starwars-visualguide.com/assets/img/planets/${info.uid}.jpg`} style={{borderRadius: "1.25rem"}} className="img-fluid" alt="..." />
    </div>
    <div style={{display: "flex", flexDirection: "column"}} className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{info.properties?.name}</h5>
        <p className="card-text">{info.description}</p>
      </div>
      <ul class="list-group list-group-horizontal m-5">
  <li style={{width: "100%"}} class="list-group-item"><strong>Population:</strong> {info.properties?.population}</li>
  <li style={{width: "100%"}} class="list-group-item"><strong>Climate:</strong> {info.properties?.climate}</li>
  <li style={{width: "100%"}} class="list-group-item"><strong>Terrain:</strong> {info.properties?.terrain}</li>
</ul>
    </div>
  </div>
</div>
          
          
          {info.height}
          
        </div>
     );
}
 
export default PlanetInfo;