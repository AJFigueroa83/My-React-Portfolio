import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Navigation from './Navigation'
import Home from './home';

class Header extends Component {
    render() {
        return (
            <Router>
                <header>
                    <Navigation />
                </header>

                <div className="content">
                    <Routes>
                        <Route exact path="/" element= {<Home/>} />
                        <Route path="/aboutMe" element={<AboutMe/>} />
                        <Route path="/portfolio" element={<Portfolio/>} />
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/resume" element={<Resume/>}/>
                    </Routes>
                </div>
            </Router>
        )
    }
}

export default Header