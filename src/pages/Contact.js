import React from 'react'

const Contact = () => {
    return (
        <div class="container">
            <div class="row">
                <h1>Contact</h1>
            </div>
            <hr></hr>
                <div class="row">
                    <div class="col-sm-6">
                        <form class="content">
                            <div class="input-group">
                                <div class="first-name">
                                    <label for="fname"><strong>First Name</strong></label>
                                    <input type="text" aria-label="First name" class="form-control" placeholder="First Name"/>
                        </div>
                                    <div class="last-name">
                                        <label for="lname"><strong>Last Name</strong></label>
                                        <input type="text" aria-label="Last name" class="form-control" placeholder="Last Name"/>
                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1"><strong>Email Address</strong></label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                            placeholder="Your Email"/>
                                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                    </div>
                                        <div class="input-group">

                                            <label for="exampleFormControlTextarea1" class="form-label"><strong>Message</strong></label>

                                            <textarea class="form-control" aria-label="With textarea"
                                                placeholder="Enter Message Here!"></textarea>
                                        </div>
                                        <div class="submit">
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                        </div>
                </form>
                                </div>
                                <div class="col-sm-6">
                                    <img src="images/Telescope-donald-giannatti.jpg" class="rounded" id="contact-img" alt=""/>
            </div>
                                </div>
                            </div>
    )
}

export default Contact
