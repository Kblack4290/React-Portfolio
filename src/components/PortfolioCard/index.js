import React from 'react'
const Card = (props) => {
    return (
        


            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div className="card" style={{width: "18rem"}}>
                        <img src={props.image} class="card-img-top" alt=" haggle screenshot" />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <hr></hr>
                            <a href= {props.githubUrl} class="btn btn-primary" target="_blank">Repository</a>
                            <a href= {props.projectUrl} class="btn btn-primary" target="_blank">{props.title}</a>
                        </div>
                    </div>
                </div>
            </div>
        

    )
}

export default Card
