import React from 'react'
import Projects from '../utils/API'
import Card from '../components/PortfolioCard'
import Haggle from '../assets/images/Haggle_img.png'
import Concoctions from '../assets/images/Concoction.png'
import Nerd from '../assets/images/Nerd-out-img.png'
import Password from '../assets/images/Password_Generator_Screenshot.png'
import Quiz from '../assets/images/Quiz_screenshot.png'
import Planner from '../assets/images/Work_Planner_Screenshot.png'


const Portfolio = () => {
    const images = [Haggle, Concoctions, Nerd, Password, Quiz, Planner]
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-10">
                    <h1>Portfolio</h1>
                </div>
            </div>
            <hr></hr>
            <div className="row">
                {Projects.map((Project, index) => {
                    return (
                        <Card image={images[index]}
                            title={Project.title}
                            githubUrl={Project.githubUrl}
                            projectUrl={Project.projectUrl} />
                    )
                })}

            </div>

        </div>
    )
}

export default Portfolio
