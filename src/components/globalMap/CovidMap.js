import React from "react";
import { MapContainer, GeoJSON} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CovidMap.css";



// Here I defind countries and styleing it 
const CovidMap = ({ countries }) => {
    const mapStyle= {
        fillColor: "white",
        weight: 1,
        color: "black",
        fillOpacity: 1, 
    };
     // Using the onEachCounrty fuction by getting the data from properties and color.
     // Name is the key to enter ADMIN is the data jSon.
     // confirmedText is the properties to give the confirmed cases
     // bindpopup for the name and confirmedText
    const onEachCountry = (country, layer) =>{
        layer.options.fillColor = country.properties.color;
        const name = country.properties.ADMIN;
        const confirmedText = country.properties.confirmedText;
        layer.bindPopup(`${name} ${confirmedText}`);
    };



       // MapContiner is the hole Map on the web.
       // GeoJSON is the contries shape inside the Map.
    return ( 
        <div><h2 className="header">Coronavirus World Map:</h2>
         <MapContainer style={{ height: "60vh" }} zoom={2} center={[30, 80]}>
            <GeoJSON style={mapStyle}
             data={countries}
              onEachFeature={onEachCountry} />
         </MapContainer>
         </div>
     );
}
 
export default CovidMap;