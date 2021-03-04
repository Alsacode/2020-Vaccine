import {features } from "../date/countries.json";


class LoadCountriesTask{
    load = (setState) => {
        setState(features);
    };


}

export default LoadCountriesTask;