import React, { useState, useEffect, Fragment } from 'react'

import Flag from '../flag/Flag'
import Filter from '../filter/Filter'

const ListFlags = () => {
    // COMP DATA:
    // base fetched data:
    const [storedFlags, setStoredFlags] = useState([])

    // data to store filtered data temporary:
    const [flags, setFlags] = useState([])
    const [term, setTerm] = useState('')

    const handleSearch = () => {
        // filtering with input criteria/term:
        const filteredBySearchTerm = storedFlags.filter(
            ({ name, nativeName, capital, region }) => {
                // TODO: this could be enhanced with an elegant way, instead of this shit.
                const cleanName = name?.toLowerCase()
                const cleanNativeName = nativeName?.toLowerCase()
                const cleanCapital = capital?.toLowerCase()
                const cleanRegion = region?.toLowerCase()

                return (
                    cleanName?.includes(term) ||
                    cleanCapital?.includes(term) ||
                    cleanRegion?.includes(term) ||
                    cleanNativeName?.includes(term)
                )
            }
        )

        setFlags(filteredBySearchTerm)
    }

    useEffect(async () => {
        const result = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await result.json()

        setStoredFlags(data)
        setFlags(data)
    }, [])

    useEffect(() => {
        handleSearch()
    }, [term])

    return (
        <Fragment>
            {/* 1) get the data from user input*/}
            <Filter getInputVal={(searchTerm) => setTerm(searchTerm)} />

            {flags.length ? (
                <div className="list-flags container countries">
                    {flags.map((flag) => (
                        <Flag key={flag.name} {...flag} />
                    ))}
                </div>
            ) : (
                <h2 style={{ textAlign: `center` }}>
                    Your search term does not matches any
                </h2>
            )}
        </Fragment>
    )
}

export default ListFlags
