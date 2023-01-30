import React from "react";
import author from "../../src/mecopy.jpeg";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..." />
                    </div>

                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>Hello! I'm Derick, a user-focused, highly adaptive full stack web developer with a background in graphic design. I recently completed requirements for my certificate in Butler University Executive Education Full Stack Web Development Boot Camp. I use MERN Stack (MongoDB, Express, ReactJS and NodeJS), GitHub, NoSQL, MySQL, JSON, jQuery, JavaScript ES6+, Bootstrap, CSS3, HTML5, VSCode, GoogleFonts and several Adobe Programs during website production and deployment.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default AboutMe