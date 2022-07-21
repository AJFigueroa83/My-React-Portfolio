import React, { Component } from 'react';
import { Route, Link, HashRouter, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

class Header extends Component {
    render() {
        return (
            <HashRouter>
                <header>
                    <Navigation />
                </header>

                <div className="content">
                    <Routes>
                        <Route exact path="/" render={() => <Link to="/aboutMe" />} />
                        <Route path="/aboutMe" component={AboutMe} />
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/contact" component={Contact}/>
                        <Route path="/resume" component={Resume}/>
                    </Routes>
                </div>
            </HashRouter>
        )
    }
}

export default Header