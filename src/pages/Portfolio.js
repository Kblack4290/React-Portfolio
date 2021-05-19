import React from 'react'
import Projects from '../utils/API'
import Card from '../components/PortfolioCard'
import Container from '../components/Container'
import Wrapper from '../components/Wrapper'
import Haggle from '../assets/images/Haggle_img.png'
import Concoctions from '../assets/images/Concoction.png'
import Nerd from '../assets/images/Nerd-out-img.png'
import Password from '../assets/images/Password_Generator_Screenshot.png'
import Quiz from '../assets/images/Quiz_screenshot.png'
import Planner from '../assets/images/Work_Planner_Screenshot.png'


const Portfolio = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-10">
                    <h1>Portfolio</h1>
                </div>
            </div>
            <hr></hr>

            <Card

                image={Haggle}
                title={Projects[0].title}
                githubUrl={Projects[0].githubUrl}
                projectUrl={Projects[0].projectUrl} />

            <Card

                image={Concoctions}
                title={Projects[1].title}
                githubUrl={Projects[1].githubUrl}
                projectUrl={Projects[1].projectUrl} />

            <Card

                image={Nerd}
                title={Projects[2].title}
                githubUrl={Projects[2].githubUrl}
                projectUrl={Projects[2].projectUrl} />

            <Card

                image={Password}
                title={Projects[3].title}
                githubUrl={Projects[3].githubUrl}
                projectUrl={Projects[3].projectUrl} />

            <Card

                image={Quiz}
                title={Projects[4].title}
                githubUrl={Projects[4].githubUrl}
                projectUrl={Projects[4].projectUrl} />

            <Card

                image={Planner}
                title={Projects[5].title}
                githubUrl={Projects[5].githubUrl}
                projectUrl={Projects[5].projectUrl} />


        </div>
    )
}

export default Portfolio
