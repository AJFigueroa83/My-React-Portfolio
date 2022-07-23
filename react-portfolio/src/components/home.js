import React from "react";

function Home() {

    return (
        <div className="homeBody" id="heroBody">
            <div className="container has-text-centered" id="title">
                <img className="has-ratio" width='256' height='256' src="../../images/IMG_3905 2.jpg" alt="profile pic" id="profilePic"></img>  
                <p class="title" id="name">
                Alfredo J. Figueroa
                </p>
                <p className="subtitle" id="subtitle">
                Let's Work Together!
                </p>
            </div>
        </div>
    );
};

export default Home;