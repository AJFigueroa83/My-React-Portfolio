import React from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Individual Cards 
function ProjectCards(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src={props.image}/>
        </div>
        <div className="content">
              <p className="card-title">{props.name}</p>
              <div className="proj-icons-container">
              <a href={props.github} target="_blank"><img className="project-icon" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="GitHub Repo" /></a> 
              <a href={props.deploy} target="_blank"><img className="project-icon" src="https://img.icons8.com/fluent/48/000000/domain.png" alt="Live Application" /></a>
             </div>
              <div className="topics">
                    {props.topics}
              </div>
        </div>
      </div>
    );
}
  
  export default ProjectCards;