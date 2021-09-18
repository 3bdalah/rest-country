import React from 'react'

import { Link } from 'react-router-dom'
import './flag.scss'

const Flag = ({ name, flag, alpha3Code, population, capital, region }) => {
    return (
        <>
            <Link to={`/countries/${name}`} key={alpha3Code}>
                <div className="card">
                    <img src={flag} alt={name} />
                    <div className="card-body">
                        <h3 className="country-name">{name}</h3>
                        <p>
                            <strong>Population:</strong>
                            {population}
                        </p>
                        <p className="country-region">
                            <strong>Region:</strong>
                            {region}
                        </p>
                        <p>
                            <strong>Capital:</strong>
                            {capital}
                        </p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Flag
