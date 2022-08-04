import React from "react";

function Resume() {
    return (
        <main className="resume-container">
            <section className="container">
                <a className="has-ratio" width='1344' height='1000' href={process.env.PUBLIC_URL+"/images/AJ Developer resume(portfolio).pdf"} alt="resume"></a>
            </section>
        </main>
    )
}

export default Resume;