import React from 'react'

const Navbar = () => {
    return (
        <>
            <header>
                <div className="container">
                    <h1>Where in the world?</h1>
                    <button className="btn-toggle" id="toggle">
                        <i className="far fa-moon"></i>
                        <i className="fas fa-moon"></i>
                        Dark Mode
                    </button>
                </div>
            </header>
        </>
    )
}

export default Navbar
