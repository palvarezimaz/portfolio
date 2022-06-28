import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAIL_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAIL_TEMPLATE_ID}`,
        form.current,
        `
        ${process.env.REACT_APP_EMAILIJS_USER_KEY}`
      )
      .then(
        (result) => {
          setMessage(
            `Your message has been sent. I will get back to you asap. =)`
          );
        },
        (error) => {
          setMessage(`Something went wrong and the message was not sent. =(`);
        }
      );
  };

  return (
    <div className="Contact">
      <h2>
        Contact me or email me:
        <span>
          <a href="mailto: palvarezimaz@gmail.com">palvarezimaz@gmail.com</a>
        </span>
      </h2>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          required={true}
        />

        <input
          type="email"
          name="user_email"
          placeholder="Email"
          required={true}
        />
        <textarea name="message" placeholder="Message..." required={true} />
        <input type="submit" value="Send" />
      </form>
      {message && (
        <div className="message">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
