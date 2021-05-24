import React from 'react'
import emailjs from 'emailjs-com';
import Telescope from '../assets/images/Telescope-donald-giannatti.jpg'

const Contact = () => {
    const form = document.forms['myForm'];
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_ecdl81r', 'template_nwu6j7r', e.target, 'user_jVGBrT34O3VrSEmUMmNmB')
            .then((result) => {
                form.reset();
                alert('Thank you for your message!');
                console.log(result.text);
                
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="container">
            <div className="row">
                <h1>Contact</h1>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-sm-6">
                    <form className="content" onSubmit={sendEmail} id="myForm">
                        <div className="input-group form-group">
                            <div className="first-name">
                                <label for="fname"><strong>Name</strong></label>
                                <input type="text" aria-label="Name" className="form-control" placeholder="Name" name="from_name" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="exampleInputEmail1"><strong>Email Address</strong></label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="Your Email" name="from_email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                        </div>
                        <div className="input-group">

                            <label for="exampleFormControlTextarea1" className="form-label"><strong>Message</strong></label>

                            <textarea className="form-control" aria-label="With textarea" name="message"
                                placeholder="Enter Message Here!"></textarea>
                        </div>
                        <div className="submit">
                            <button type="submit" className="btn btn-primary" value="Submit">Submit</button> 
                        </div>
                    </form>
                </div>
                <div className="col-sm-6">
                    <img src={Telescope} className="rounded" id="contact-img" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact
