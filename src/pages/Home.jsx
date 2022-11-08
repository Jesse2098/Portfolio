import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css"

export default function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2> Hi, My Name is Jesse</h2>
                <div className="prompt">
                    <p>
                        A fullstack Developer with a passion for learning and creating.
                    </p>
                    <LinkedInIcon/>
                    <EmailIcon/>
                    <GithubIcon/>
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>
                            ReactJS, Angular, Redux, html css react native flutter NPM Ionic bootstrap
                            materialui yarn tailwindcss styledcomponents
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            nodejs java spring .net exressjs graphql apolloserver
                            mysql mongodb dynamodb digitalocean aws s3 ms sql
                        </span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>
                            javascript java python c# c c++ typescript go
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    )
} 