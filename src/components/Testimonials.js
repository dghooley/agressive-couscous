import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
    return (
        <div id="testimonials" className="testimonials">
            <h1>My Clients</h1>
            <div className="testimonials-content">
                <TestimonialsCarousel/>

            </div>
        </div>
    )
}

export default Testimonials;