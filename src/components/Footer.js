import React from "react";
import {
    LinkedinShareButton,
    LinkedinIcon,
    FontAwesomeIcon,
    FacebookIcon,
    FacebookShareButton,
    RedditIcon,
    RedditShareButton,
    TwitterIcon,
    TwitterShareButton,
} from "react-share";

import Resume from '../assets/Resume.pdf'
import { FaGithubSquare, FaFilePdf, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        {/* <div className="d-flex">
                            <p>USA</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel: 555-555-5555">+1(555)555-5555</a>
                        </div>
                        <div className="d-flex">
                            <p>emailAddress@email.com</p>
                        </div> */}
                    </div>
                    {/* - <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br />
                                <a className="footer-nav">About me</a>
                                <br />
                                <a className="footer-nav">Services</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <br />
                                <a className="footer-nav">Portfolio</a>
                                <br />
                                <a className="footer-nav">Contact</a>
                            </div>
                        </div>
    </div> */}
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            {/* <FacebookShareButton
                                url={""}
                                quote={""}
                                hashtag="#"
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={""}
                                quote={""}
                                hashtag="#"
                            >
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            <RedditShareButton
                                url={""}
                                quote={""}
                                hashtag="#"
                            >
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>
                            <LinkedinShareButton
                                url={"https://www.linkedin.com/in/derick-hooley/"}
                                quote={"Fullstack Developer"}
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                            */}

                            <a href={"https://www.linkedin.com/in/derick-hooley/"} target="_blank" rel="nonreferrer"><FaLinkedin className="mx-3" size={42} /></a>

                            <a href={"https://github.com/dghooley"}><FaGithubSquare className="mx-3" size={43} />
                            </a>

                            <a href={Resume} target="_blank" rel="nonreferrer"><FaFilePdf className="mx-3" size={39} /></a>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;DGHDesigns | All Rights Reserved | dghooley@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer