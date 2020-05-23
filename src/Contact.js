import React, { Component } from 'react';
import axios from 'axios';
import * as EmailValidator from 'email-validator';

import mail from './images/mail.png';
import './stylesheets/contact.css';
import logo from './images/logo.svg';
import Mheader from './Mheader';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPhone: false,
        };
        this.updatePredicate = this.updatePredicate.bind(this);
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isPhone: window.innerWidth < 800 });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }
    handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if(EmailValidator.validate(email) && name.length>5 && message.length>10) {
            axios({
                method: "POST",
                url: "https://portfolioemailer.herokuapp.com/send",
                data: {
                    name: name,
                    email: email,
                    message: message
                }
            }).then((response) => {
                if (response.data.msg === 'success') {
                    alert("Message Sent.");
                    this.resetForm()
                } else if (response.data.msg === 'fail') {
                    alert("Message failed to send.")
                }
            })
        } else {
            alert("Invalid entries, please check again");
        }
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }

    render() {
        const isPhone = this.state.isPhone;
        return (
            <div className="bg-contact100">
                {isPhone ?
                    <Mheader /> :
                    <div className="aheader">
                        <a href="https://devabhi.tech">
                            <img src={logo} className="logo" />
                        </a>
                    </div>
                }
                <div class="container-contact100">
                    <div class="wrap-contact100">
                        <div class="contact100-pic js-tilt" data-tilt>
                            <img src={mail} alt="IMG" />
                        </div>
                        <form class="contact100-form" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <span class="contact100-form-title">
                                Get in touch
					        </span>
                            <div class="wrap-input100">
                                <input class="input100" type="text" id="name" placeholder="Name" />
                            </div>
                            <div class="wrap-input100">
                                <input class="input100" type="text" id="email" placeholder="Email" />
                            </div>
                            <div class="wrap-input100">
                                <textarea class="input100" type="text" id="message" placeholder="Message"/>
                            </div>
                            <div class="container-contact100-form-btn">
                                <button class="contact100-form-btn">
                                    Send
						        </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact; 