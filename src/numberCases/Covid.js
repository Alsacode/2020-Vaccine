import React, { Component } from 'react';
import LoadingSpinner from './LoadingSpinner';
import axios from "axios";
import CountryTable from './CountryTable';
import Chart from "./Chart";

class Covid extends Component {
    state = { 
        countries: [],
        filterText: "",
        allCountryTotal: 0,
        selectedCountries: [],
    };

url =
"https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";

// using the method async make it easyr. Using liberay axios for make an API call getting it from url.
 async componentDidMount() {
    const response = await axios.get(this.url);
    const rows = response.data.split("\n");
    const countries = [];
    let allCountryTotal = 0;
    for(let i = 1; i < rows.length; i++ ){
        const row = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/); //splitting on coma
        // Using the replace method for taking out from list of name countries global replace ("").
        const countryName = row[0].replace(/"/g, "");
        const total = Number(row[4]);
        if (countryName !== "") {
          countries.push({
            name: countryName,
            total: total,
          });
          allCountryTotal += total;
        
      }
    }
 
    // Using operator await for promise to resolve inside fuction all returns an array with the resolved values once all the passed-in promises.
    // Showing loading before the you will data.

    await new Promise(function (x) {
      setTimeout(x, 800);
     });
    this.setState({ countries, allCountryTotal });
 }

 handleOnRowSelected = (countryToUpdate) => {
    const countries = [...this.state.countries];

    const countryIndex = countries.findIndex(
      (c)=>c.name === countryToUpdate.name
      );

      const country = {
          name: countryToUpdate.name,
          total: countryToUpdate.total,
          selected: !countryToUpdate.selected,
      };
      countries[countryIndex] = country;

      this.setState({countries, selectedCountries: countries.filter((c)=>c.selected),});
 };

 // Compare function
 SortByTotal = (countryA, countryB) => {
     // Compare is will return 3 things outcomes.
     // 0 equal
     // 1 greater
     // -1 less
    if(countryB.total > countryA.total) return 1;
     else if(countryB.total < countryA.total) return -1;
     else return 0;
 };

 handleOnSortByTotal = (event) => {
    this.handleOnSortBy(event, this.SortByTotal);
 };

  // Compare function
  onSortByCountryName = (countryA, countryB) => {
    // Compare is will return 3 things outcomes.
    // 0 equal
    // 1 greater
    // -1 less
   if(countryA.name > countryB.name) return 1;
    else if(countryA.name < countryB.name) return -1;
    else return 0;
};

 handleOnSortByCountryName = (event) => {
  this.handleOnSortBy(event, this.onSortByCountryName);
    
 };

 handleOnSortBy = (event, sortOperation ) => {
    event.preventDefault();
    const countries = [...this.state.countries]
    countries.sort(sortOperation);
    this.setState({countries});
 };



   // Format a number with commas
 numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
    render() { 
        const { countries,
            allCountryTotal,
            selectedCountries,
          } = this.state;
        return ( 
            <div>
                <h2 style={{ textAlign: "center", fontFamily:"bold"}} >All Countries Total: {this.numberWithCommas(allCountryTotal)} </h2>

               { allCountryTotal === 0 ? ( <LoadingSpinner />
                ) : (
                  <div>
                    <Chart countries={selectedCountries} />
                 <CountryTable countries={countries} 
                  onSortByTotal = {this.handleOnSortByTotal}
                  onSortByCountryName= {this.handleOnSortByCountryName}
                  onRowSelected = {this.handleOnRowSelected}
                 /> 
                 </div>
                 )} 
            </div>
         );
    }
}
 
export default Covid;