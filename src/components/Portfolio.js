import React from 'react'; 
import CarouselComponent from "./carousel.component";
import 'bootstrap/dist/css/bootstrap.min.css';


function Portfolio () {  

    return (
      <div className='project-container'>
        <section className="container">
          <div className="project">
            <h2 className="top-title">My Portfolio</h2>
            <hr></hr>
          </div>
          <CarouselComponent />
          
        </section>
      </div>
    );
  }

export default Portfolio;