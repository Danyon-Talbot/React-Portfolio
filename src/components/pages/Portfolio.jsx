import React from "react";

export const Portfolio = () => {
    return (
        <div className="portfolio-page">
            <div className="card">
                <a href="https://danyon-talbot.github.io/P1-ScrollCinema/">
                    <img className="card-image" src="../../src/assets/ScrollCinemaLogo.png" alt="HTML Systems Image"/>
                </a>
                <div className="card-content">
                <a href="https://danyon-talbot.github.io/P1-ScrollCinema/" className="card-title">ScrollCinema</a>
                <a href="https://github.com/Danyon-Talbot/P1-ScrollCinema" className="github-link">
                        <img src="../../src/assets/github-mark.png" alt="GitHub"/>
                </a>
                </div>
            </div>
            <div className="card">
                <a href="https://sleepy-castle-96589-687879c1fd68.herokuapp.com/login">
                    <img className="card-image" src="../../src/assets/CalShare.png" alt="HTML Systems Image"/>
                </a>
                <div className="card-content">
                <a href="https://sleepy-castle-96589-687879c1fd68.herokuapp.com/login" className="card-title">CalShare</a>
                <a href="https://github.com/Danyon-Talbot/P2-CalShare" className="github-link">
                        <img src="../../src/assets/github-mark.png" alt="GitHub"/>
                </a>
                </div>
            </div>
            <div className="card">
                <a href="https://jate-just-another-text-editor.onrender.com/">
                    <img className="card-image" src="../../src/assets/JATE.png" alt="HTML Systems Image"/>
                </a>
                <div className="card-content">
                <a href="https://jate-just-another-text-editor.onrender.com/" className="card-title">JATE Text Editor</a>
                <a href="https://github.com/Danyon-Talbot/PWA-Text-Editor" className="github-link">
                        <img src="../../src/assets/github-mark.png" alt="GitHub"/>
                </a>
                </div>
            </div>
        </div>
        
    )
}