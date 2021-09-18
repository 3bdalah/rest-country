import './App.css'

import React from 'react'
// import ReactDOM from 'react-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import ListFlags from './components/listFlags/ListFlags'

// import pages
import About from './pages/about/About'
// Router Dom
import { Switch, Route } from 'react-router-dom'
import SingleFlag from './components/singleFlag/SingleFlag'

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>

                <Route exact path="/">
                    <ListFlags />
                </Route>
                <Route path="/countries/:id" children={<SingleFlag />}></Route>
            </Switch>
            <Footer />
        </>
    )
}

export default App
