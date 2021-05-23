import React from 'react'

const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <h1>Contact</h1>
            </div>
            <hr></hr>
                <div className="row">
                    <div className="col-sm-6">
                        <form className="content">
                            <div className="input-group">
                                <div className="first-name">
                                    <label for="fname"><strong>First Name</strong></label>
                                    <input type="text" aria-label="First name" className="form-control" placeholder="First Name"/>
                        </div>
                                    <div className="last-name">
                                        <label for="lname"><strong>Last Name</strong></label>
                                        <input type="text" aria-label="Last name" className="form-control" placeholder="Last Name"/>
                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1"><strong>Email Address</strong></label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                            placeholder="Your Email"/>
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                    </div>
                                        <div className="input-group">

                                            <label for="exampleFormControlTextarea1" className="form-label"><strong>Message</strong></label>

                                            <textarea className="form-control" aria-label="With textarea"
                                                placeholder="Enter Message Here!"></textarea>
                                        </div>
                                        <div className="submit">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                </form>
                                </div>
                                <div className="col-sm-6">
                                    <img src="images/Telescope-donald-giannatti.jpg" className="rounded" id="contact-img" alt=""/>
            </div>
                                </div>
                            </div>
    )
}

export default Contact
