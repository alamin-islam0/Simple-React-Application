import { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries;
    console.log(countries)

    return (
        <div>
            <div>
            <h1>Countries {countries.length}</h1>
            <h3>Total Visited Countries: </h3>
            </div>
            <div className="countries-container">
                {
                    countries.map(country => <Country country={country} key={country.cca3}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;