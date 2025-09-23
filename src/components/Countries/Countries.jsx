import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <div>
        <h1>
          Countries <span style={{ color: "green" }}>{countries.length}</span>
        </h1>
        <h3>Total Visited Countries: {visitedCountries.length}</h3>
        <ol>
          {
            visitedCountries.map(country => <li
            key={country.cca3}
            >{country.name.common}</li>)
          }
        </ol>
      </div>
      <div className="countries-container">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca3.cca3}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
