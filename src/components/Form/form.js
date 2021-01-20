import React, {useState, Fragment } from 'react';
import {useAlert} from 'react-alert'
import axios from 'axios'
import './form.scss'

const Form = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const alert = useAlert()
  const submitRequest = async (e) => {
    e.preventDefault();
    console.log({ email, message });
    await axios.post("/api/contact", {email, message});
  };

  return (
    <div className='form'>
      <div className='form-container'>
        <form onSubmit={submitRequest}>
          <h1 className='form-title'>Have questions?</h1>
          <div className='form-box'>
            <h2>Your Email</h2>
            <input className='form-input-box'
              name="email"
              placeholder="Email Address"
              onChange={e => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className='form-box'>
            <h2>Write us!</h2>
            <input className='form-input-box-two'
              name="message"
              type="text"
              placeholder="Ask your questions here!"
              onChange={e => setMessage(e.target.value)}
              value={message}
              required
            />
          </div>
          <div className='form-button-container'>
            <Fragment >
              <button onClick={() => {alert.success("Email Sent")}} type="submit" value="Submit">Send</button>
            </Fragment>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form