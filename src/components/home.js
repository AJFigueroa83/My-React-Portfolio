import React from "react";

function Home() {

    return (
        <div className="homeBody" id="heroBody">
            <div className="container has-text-centered" id="title">
                <img className="has-ratio profile-pic" width='256' height='256' src={process.env.PUBLIC_URL+"/images/profile_picture.jpg"} alt="profile pic" id="profilePic"></img>  
                <p className="homeTitle" id="name">
                Alfredo J. Figueroa
                </p>
                <p className="subtitle" id="subtitle">
                Let's Get Coding!
                </p>
            </div>
        </div>
    );
};

export default Home;