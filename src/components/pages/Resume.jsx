import React from "react";

export const Resume = () => {
    const resumeFilePath = "../../src/assets/Resume Fill In.jpeg";

    return (
        <div className="text-container">
            <h1>Resume</h1>
            <a href={resumeFilePath} download="Resume Fill In.jpeg">
                Download Resume
            </a>
            <div>
                <h2>Front-End SKills</h2>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        JQuery
                    </li>
                    <li>
                        Responsive Design
                    </li>
                    <li>
                        Tailwind CSS
                    </li>
                    <li>
                        React
                    </li>
                </ul>
            </div>
            <div>
                <h2>Back-End Skills</h2>
                <ul>
                    <li>
                        APIs
                    </li>
                    <li>
                        NodeJS
                    </li>
                    <li>
                        ExpressJS
                    </li>
                    <li>
                        MySQL, Sequelize
                    </li>
                    <li>
                        MongoDB, Mongoose
                    </li>
                    <li>
                        REST
                    </li>
                    <li>
                        GraphQL
                    </li>
                </ul>
            </div>
        </div>
    )
}