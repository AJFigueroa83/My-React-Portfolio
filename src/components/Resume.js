import React from "react";
import logo from '../logo.svg'
import '../App.css'

function Resume() {
    return (
        <main className="resume-container">
            <section className="container">
                <a className="App-Link" href={process.env.PUBLIC_URL+"/images/AJ Developer resume(portfolio).pdf"} alt="resume"><img src={logo} className='App-logo' alt="logo" />Click logo to view Resume!</a>
            </section>
        </main>
    )
}

export default Resume;