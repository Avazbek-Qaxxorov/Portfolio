import  { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'YOUR_SERVICE_ID',  
        'YOUR_TEMPLATE_ID', 
        formData,
        'YOUR_USER_ID'       
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('An error occurred, please try again.');
        }
      );

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Contact Me</h2>
        <form onSubmit={sendEmail} className="max-w-lg mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full mb-4 p-4 rounded bg-gray-800 border border-gray-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full mb-4 p-4 rounded bg-gray-800 border border-gray-700"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            rows="5"
            className="w-full mb-4 p-4 rounded bg-gray-800 border border-gray-700"
          ></textarea>
          <button type="submit" className="bg-yellow-500 py-3 px-8 rounded-full font-bold hover:bg-yellow-400">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
