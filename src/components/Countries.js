import React from 'react';

const Countries = props => (
    <div>
    {props.countries.map((country) => {
        return (
          <div key={country.numericCode}>
            <p>{ country.name }</p>
            <img src={country.flag} alt={country.name}></img>
          </div>
        )
      })}
      </div>
)

export default Countries;