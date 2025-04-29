// Import necessary dependencies from React and other libraries
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/countryList.css';

// Main component for displaying and managing the country list
const CountryList = () => {
  // State for storing all countries from the API
  const [countries, setCountries] = useState([]);
  // State for storing the search term
  const [search, setSearch] = useState('');
  // State for storing the selected continent filter
  const [selectedContinent, setSelectedContinent] = useState('all');

  // Array of available continents for filtering
  const continents = [
    'all',
    'Africa',
    'Americas', // hört sich komisch an, in der API ist Amercia aber als "Americas" bezeichnet, also müssen wir übereinstimmen.
    'Asia',
    'Europe',
    'Oceania',
  ];

  // Effect hook to fetch countries data when component mounts
  useEffect(() => {
    // Make GET request to REST Countries API
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => { //response axios variabel
        // Store the fetched data in state
        setCountries(response.data); //repsonse.date ist das Array mit den Ländern
      })
      .catch(error => {
        // Handle any errors during the API call
        console.error('Problem while fetching country info:', error);
      });
  }, []); // Empty dependency array means this effect runs only once on mount

  // Filter function that combines search term and continent filtering
  const filteredCountries = countries.filter(
    country => {
    // Check if country name matches search term (case insensitive)
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());
    // Check if country belongs to selected continent or if 'all' is selected
    const matchesContinent = selectedContinent === 'all' || 
      country.region === selectedContinent;
    // Return true only if both conditions are met
    return matchesSearch && matchesContinent;
  });

  return (
    <div className="box">
      <h1 className="head">The World</h1>
      
      {/* Filter container for search input and continent selector */}
      <div className="filter-container">
        {/* Search input field */}
        <input
          type="text"
          placeholder="search for..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search"
        />
        
        {/* Continent selector dropdown */}
        <select
          value={selectedContinent}
          onChange={(e) => setSelectedContinent(e.target.value)}
          className="filter-select"
        >
          {/* Map through continents array to create options */}
          {continents.map(continent => (
            <option key={continent} value={continent}>
              {continent === 'all' ? 'All continents' : continent}
            </option>
          ))}
        </select>
      </div>
      
      {/* List of filtered countries */}
      <ul className="country-list">
        {filteredCountries.map((country) => (
          <li key={country.cca3} className="country-item">
            {/* Display country name */}
            <span className="country-name">{country.name.common}</span>
            {/* Display capital city with fallback for countries without capital */}
            <span className="capital">
              {country.capital?.[0] || 'Keine Angabe'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;

