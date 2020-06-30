import React, { Component } from 'react';
import * as EmailValidator from 'email-validator';

import mail from './images/mail.png';
import './stylesheets/contact.css';
import logo from './images/logo.svg';
import Mheader from './Mheader';

const encode = (data) => {
    console.log(data);
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPhone: false,
            name: "", 
            email: "", 
            message: "" 
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
    handleSubmit = e => {
        if(EmailValidator.validate(this.state.email) && this.state.name.length>5 && this.state.message.length>10) {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", name: this.state.name, email: this.state.email, message: this.state.message })
              })
              .then(() => alert("Success!"))
              .catch(error => alert(error));
              e.preventDefault();
        } else {
            alert("Invalid input")
        }
    };
  
    handleChange = e => this.setState({ [e.target.id]: e.target.value });

    render() {
        const isPhone = this.state.isPhone;
        const { name, email, message } = this.state;
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
                        <form class="contact100-form" id="contact-form" onSubmit={this.handleSubmit} method="POST">
                            <span class="contact100-form-title">
                                Get in touch
					        </span>
                            <div class="wrap-input100">
                                <input class="input100" type="text" id="name" value={name} onChange={this.handleChange} />
                            </div>
                            <div class="wrap-input100">
                                <input class="input100" type="text" id="email" value={email} onChange={this.handleChange} />
                            </div>
                            <div class="wrap-input100">
                                <textarea class="input100" type="text" id="message" value={message} onChange={this.handleChange}/>
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