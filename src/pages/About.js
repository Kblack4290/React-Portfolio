import React from 'react'
import PikesPeak from '../assets/images/Peaks.jpg'

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="header"> About Me</h1>
                    <hr></hr>

                    <div className="about-content">
                        <img src={PikesPeak} alt="At Pikes Peak Colorado" id="about-img" />

                        <p>Hello, I am Keith, I am a Software Developer with a background in management and business development.
                            The quality of skills that I have learned in my past professions are proving to be a great benefit to my growth as a Developer.
                            I am always searching for new ways to improve my programming skills by keeping up to date with new tools and continuing to practice my craft. </p>

                        <p>I find knowledge to be exciting which is my favorite aspect of programming.
                            I always look forward to learning new techniques,  languages, tools, or technologies that I can use for a project.
                            The challenges that come with continuous learning can be frustrating at first but I get a huge sense of fulfillment once I finally find a solution.
                            Another aspect of programming that I really enjoy that stands out from other professions is the community. There is always someone who is willing to help and grow with you whether that is at a place of business or on a community forum like StackOverflow or Reddit.
                            . </p>

                        <p>Outside of programming, I like to explore the City of Denver’s restaurants, go to sporting events, and play video games with friends.
                            I also have a fond love for Comedy, especially stand-up comedy.
                            I really enjoy catching some of my favorite acts who come through Denver and look forward to new specials.
                            Feel free to reach out and learn more about me!</p>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
