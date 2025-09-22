import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);
  console.log(handleVisitedCountries);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div
      onClick={handleVisited}
      className={`country-box ${visited && "visited-btn"}`}
    >
      <img className="card-img" src={country.flags.flags.png} alt="" />
      <button
        style={{
          marginTop: "20px",
          padding: "10px",
          fontSize: "12px",
          background: "white",
          color: "black",
        }}
        onClick={handleVisited}
        type="button"
      >
        {visited ? "Visited" : "Not Visited"}
      </button>
      <h3>Name: {country.name.common}</h3>
      <h3>Population: {country.population.population}</h3>
      <p>
        Area: {country.area.area}
        {country.area.area > 300000 ? " Big Country" : " Small Country"}
      </p>
    </div>
  );
};

export default Country;
