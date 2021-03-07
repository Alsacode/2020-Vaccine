import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import CovidMap from "./CovidMap";
import Legend from "./Legend";
import LoadCountriesTask from "../../tasks/LoadCountriesTask";
import legendItems from "../../entities/Legenditems";
import InfoCovid from "./InfoCovid";

const Covid19 = () => {
       // this component is countries for useState so can get the countries from legendItems by using reverse function.
    const [countries, setCountries] = useState([]);

    const legendItemsInReverse = [...legendItems].reverse();
    // setting load with setCountries so can give the data through loadCountriesTask  from there come the confirm cases.
    const load = () => {
        const loadCountriesTask  = new  LoadCountriesTask();
        loadCountriesTask.load(setCountries);
    };

    useEffect(load, []);

    return ( 
        <div>
           {/* asking if  there is no data  in countries then will first go through loading component. */}
           { countries.length === 0 ? (
             <Loading />) : (
             <div><CovidMap countries={countries} />
             { /* If there is data what is coming from countries it will use CovidMap component and it will also go through loading and countries. */}
             <Legend legendItems={legendItemsInReverse} /></div>)}
             { /* For confirming the cases it will also get the data from legendItems then it will go through legendItemsInReverse */}
                <InfoCovid />
        </div>
     );
}
 
export default Covid19;