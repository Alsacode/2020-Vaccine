
import papa from "papaparse";
import { features } from "../data/countries.json";
import legendItems from "../entities/Legenditems";


class LoadCountriesTask{
        // This Url is the confirm cases around the world of COVIND-19, it will help for giving the data.
     covid19DataUrl = 
     "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";

        setState = null;
        mapCountries = features;
        // Using papaparse for getting the confirm cases from URL and the it will download it then headered and then it will give me the complete result data.
    load = (setState) => {
        this.setState = setState;
        papa.parse(this.covid19DataUrl, {
            download: true,
            header: true,
            complete: (result) =>
             this.#processCovidData(result.data),
        });  
    }
    //  #processCovidData is privet for covidCounttries and using for statment so it will defind mapCountry.
    // Using find() so we can get data from covidCountry with using ISO3 is Alpha-3 code if is equal to mapCountry and inside there is properties.
    #processCovidData = (covidCountries) => {
     for(let i=0; i < this.mapCountries.length; i++) {
         const mapCountry= this.mapCountries[i]; 
         const covidCountry = covidCountries.find(
         (covidCountry)=> covidCountry.ISO3 === mapCountry.properties.ISO_A3);
         mapCountry.properties.confirmed = 0;
         mapCountry.properties.confirmedText = "0";
    // if the covidCountry is not null the it will give us back (Number) confirmed cases
         if(covidCountry != null) {
             const confirmed = Number( covidCountry.Confirmed);
             mapCountry.properties.confirmed = confirmed;
             mapCountry.properties.confirmedText =this.#formatNumberWithCommas(
             confirmed
             );
         }
        // Seting the color depending on the country confirmed cases
         this.#setCountryColor(mapCountry);
     };

     this.setState(this.mapCountries);
    };
      // this is looking for which country have matching properties so can give a color what i have been definging in the legenditems.
      #setCountryColor = (mapCountry) => {
       const legendItem = legendItems.find((legendItem)=>
       legendItem.isFor(mapCountry.properties.confirmed)      
      );
        if(legendItem != null ) {
            mapCountry.properties.color = legendItem.color;
        }

    };
    // here is also regular expression code a number to be privte there is this kind of regular expression in google.
    #formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
}

export default LoadCountriesTask;