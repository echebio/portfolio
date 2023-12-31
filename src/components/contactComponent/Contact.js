import React,{Component} from 'react'
import {FaEnvelope, FaPhone } from 'react-icons/fa'
import './contact.css'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}
  
class Contact extends Component{
  constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "" };
  }
  
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        this.setState({name: "", email: "", message: ""})
        alert("Success!")
      })
      .catch(error => alert(error));

    e.preventDefault();
  };
  
  handleInput = e => this.setState({ [e.target.name]: e.target.value });
  

  render() {
    const { name, email, message } = this.state;
    return (
    <section id="contact" className="sections">
      <h2 className="contact__header">Lets Work Together</h2>
      <div className="contact__content">
        <p className="sub__heading">
          I'm currently AVAILABLE for any frontEnd developer role. Think I might be right candidate for your next adventure or have a question? My inbox is very much open.
        </p>
          <form
            name="contact"
            method="post"
            className="form__group"
            onSubmit={this.handleSubmit}
          >
          <input type="hidden" name="form-name" value="contact" />
          <div className="form__element">
            <input
              className="form__input"
              type="text"
              name="name"
              value={name}
              onChange={this.handleInput}
              required
            />
            <label htmlFor="name"
              className={name ? 'form__label shrink' : 'form__label'}
              >Name
            </label>
          </div>
          <div className="form__element">
            <input
              className="form__input"
              type="email"
              name="email"
              required
              value={email}
              onChange={this.handleInput}
            />
              <label htmlFor="email"
                className={email ? 'form__label shrink' : 'form__label'}
              >Email
              </label>
          </div>
          <div className="form__element">
            <textarea
              className="form__input text_area"
              name="message"
              required
              value={message}
              onChange={this.handleInput}
            >
            </textarea>
              <label htmlFor="message"
                className={message ? 'form__label shrink' : 'form__label'}
              >Message
              </label>
          </div>
          <button type="submit" className="btn btn-pry">Submit</button>
        </form>
          <div className="contact__links">
            <div className="contact__item">
              <a className="icon"aria-label="call phone number" href="tel:+2348034297552">
                <FaPhone />
              </a>
              <a className="contact__link" aria-label="call phone number"href="tel:+2348034297552">+234-8034297552</a>
            </div>
            <div className="contact__item">
              <a className="icon" aria-label="send email" href="mailto:cechelon@gmail.com">
                <FaEnvelope />
              </a> 
              <a className="contact__link" aria-label="send email" href="mailto:cechelon@gmail.com">cechelon@gmail.com</a>
            </div>
        </div>
      </div>
      
    </section>
  )
  }
    
}

export default Contact
