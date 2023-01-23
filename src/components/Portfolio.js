import React from "react"
import hBooker from "../Images/hBooker.png";
import workDay from "../Images/workDay.png";
import runBuddy from "../Images/runBuddy.png";
import where2watch from "../Images/where2watch.png";
// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {

    /* hBooker
    const openPopupboxHBooker = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={hBooker} alt="Hotel Booking App..." />
                <p>A group collaboration for a hotel booking application that allows the user to view offerings, select dates, and checkout. We used Mongoose, Moment, Stripe, MERN Stack and Axios.</p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://h-booker.herokuapp.com/", "_blank")}>https://h-booker.herokuapp.com/</a>
                <br></br>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Patsax/h-booker")}>https://github.com/Patsax/h-booker</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigHBooker = {
        titleBar: {
            enable: true,
            text: "Hotel Booking Application"
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }
    */
    // workDay Project
    const openPopupboxWorkDay = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={workDay} alt="Work Day Scheduler..." />
                <p>A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.</p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://dghooley.github.io/workDayScheduler/", "_blank")}>https://dghooley.github.io/workDayScheduler/</a>
                <br></br>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/dghooley/workDayScheduler")}>https://github.com/dghooley/workDayScheduler</a>
            </>
        )
        PopupboxManager.open({ content })
    }
    const popupboxConfigWorkDay = {
        titleBar: {
            enable: true,
            text: "Work Day Scheduler"
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }

    // Run Buddy Project
    const openPopupboxRunBuddy = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={runBuddy} alt="Run Buddy App..." />
                <p>Built using simple HTML and CSS, this website offers the user fitness training services.</p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://dghooley.github.io/run-buddy/", "_blank")}>https://dghooley.github.io/run-buddy/</a>
                <br></br>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/dghooley/run-buddy")}>https://github.com/dghooley/run-buddy</a>
            </>
        )
        PopupboxManager.open({ content })
    }
    const popupboxConfigRunBuddy = {
        titleBar: {
            enable: true,
            text: "Iteration for Run Buddy Application"
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }

    // Where2Watch
    const openPopupboxWhere2Watch = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={where2watch} alt="Movie/Show Search Engine..." />
                <p>This group project was created to utilize 3rd party APIs to browse a library of shows and movies. We used HTML, CSS, JavaScript, jQuery, Foundation, Axios, Font Awesome, Skeleton, Normalize and IMDB's API.</p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://saadsyed98.github.io/Where2Watch/", "_blank")}>https://saadsyed98.github.io/Where2Watch/</a>
                <br></br>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/saadsyed98/Where2Watch.git")}>https://github.com/saadsyed98/Where2Watch.git</a>
            </>
        )
        PopupboxManager.open({ content })
    }
    const popupboxConfigWhere2Watch = {
        titleBar: {
            enable: true,
            text: ""
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row-cols-auto justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxHBooker}>
                        <img className="portfolio-image" src={hBooker} alt="Hotel Booking App..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxWorkDay}>
                        <img className="portfolio-image" src={workDay} alt="Work Day Scheduler..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxRunBuddy}>
                        <img className="portfolio-image" src={runBuddy} alt="RunBuddy App..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxWhere2Watch}>
                        <img className="portfolio-image" src={where2watch} alt="API Search Engine..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigHBooker} />
            <PopupboxContainer {...popupboxConfigWorkDay} />
            <PopupboxContainer {...popupboxConfigRunBuddy} />
            <PopupboxContainer {...popupboxConfigWhere2Watch} />

        </div>
    )
}
export default Portfolio;