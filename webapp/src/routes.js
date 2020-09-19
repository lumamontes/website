
import React from 'react'
import Navbar from './components/pages/Navbar/Navbar'
import { BrowserRouter, Route} from 'react-router-dom'


function Routes () {
    return (
        <BrowserRouter>
        <Navbar />
        <Route path="/"/>
        <Route path="/"/>
        </BrowserRouter>
    )
}

export default Routes;