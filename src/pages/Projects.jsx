import React from "react";
import ProjectItem from "../Components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList"

import "../styles/Project.css"

export default function Projects() {
    return(
        <div className="projects">
            <h1> My Personal Projects</h1>
            <h4>They are pretty cool, check them out!</h4>
            <div className="projectList">
                {ProjectList.map((project, idx) => {
                    return(
                        <ProjectItem id={idx} name={project.name} image={project.image}/>
                    )
                })}
            </div>
        </div>
    )
}