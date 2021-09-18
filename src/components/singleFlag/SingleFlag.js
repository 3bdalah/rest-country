// import React from 'react'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

// import "./SingleFlag";
import './SingleFlag.scss'
const SingleFlag = () => {
    const [country, setCountry] = useState([])

    const { id } = useParams()
    console.log('id => ', id)
    useEffect(() => {
        const fetchCountryData = async () => {
            const response = await fetch(
                `https://restcountries.eu/rest/v2/name/${id}`
            )
            const country = await response.json()
            setCountry(country)
            console.log('country => ', country)
        }

        fetchCountryData()
    }, [id])

    return (
        <>
            <section className="country">
                <Link to="/" className="btn btn-light back-to-home">
                    <i className="fas fa-arrow-left"></i> Back Home
                </Link>
                {country.map((flagData) => {
                    const {
                        numericCode,
                        flag,
                        name,
                        nativeName,
                        population,
                        region,
                        subregion,
                        capital,
                        topLevelDomain,
                        currencies,
                        languages,
                        borders,
                    } = flagData

                    return (
                        <article key={numericCode} className="numricCode">
                            <div className="country-inner">
                                <div className="flag">
                                    <img
                                        src={flag}
                                        alt={name}
                                        className="img-country"
                                    />
                                </div>

                                <div className="country-details">
                                    <div>
                                        <h2>{name}</h2>
                                        <h5>
                                            Native Name:{' '}
                                            <span>{nativeName}</span>
                                        </h5>
                                        <h5>
                                            Population:{' '}
                                            <span>
                                                {population.toLocaleString()}
                                            </span>
                                        </h5>
                                        <h5>
                                            Region: <span>{region}</span>
                                        </h5>
                                        <h5>
                                            Sub Region: <span>{subregion}</span>
                                        </h5>
                                        <h5>
                                            Capital: <span>{capital}</span>{' '}
                                        </h5>
                                    </div>

                                    <div>
                                        <h5>
                                            Top Level Domain:{' '}
                                            <span>{topLevelDomain}</span>
                                        </h5>
                                        <h5>
                                            Currencies:{' '}
                                            <span>{currencies[0].name}</span>
                                        </h5>
                                        <h5>
                                            Languages:{' '}
                                            <span>{languages[0].name}</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="border-countries">
                                <h3>Border Countries: </h3>
                                <div className="borders">
                                    {console.log(borders)}
                                    {borders.map((border) => {
                                        return (
                                            <ul key={border}>
                                                {console.log('border', border)}
                                                <li>{border}</li>
                                            </ul>
                                        )
                                    })}
                                </div>
                            </div>
                        </article>
                    )
                })}
            </section>
        </>
    )
}

export default SingleFlag
