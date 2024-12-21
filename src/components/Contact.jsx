import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import whatsapp from '../assets/whatsapp.png';
import Lottie from 'lottie-react';
import contact from '../assets/Contact.json';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  emailjs.init({
    publicKey: 'rCyDbpHoSBVfD-uEP'
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
  .send(
    'service_woh65wd', // Your EmailJS Service ID
    'template_pr3jvks', // Replace with your EmailJS Template ID
    formData,          // The form data to send
    'rCyDbpHoSBVfD-uEP' // Your EmailJS Public Key
  )
  .then(
    (response) => {
      console.log('SUCCESS!', response.status, response);
      setIsSent(true); // Updates the state if email is sent successfully
      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    },
    (error) => {
      console.error('FAILED...', error); // Logs any errors
    }
  );


    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="z-50 bg-gray-800 relative py-10 px-5 md:px-0">
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-red-500">Get in Touch</h2>
            <p className="mb-4 text-white/85">
              I'm always open to new opportunities and collaboration. Feel free to reach out!
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/9755077741" className="text-foreground/60 hover:text-foreground/80">
                <img src={whatsapp} alt="" className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100027148873883" className="text-foreground/60 hover:text-foreground/80">
                <img src={facebook} alt="" className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/21___d.d.banna___/" className="text-foreground/60 hover:text-foreground/80">
                <img src={instagram} alt="" className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/devendra-singh-rajput/" className="text-foreground/60 hover:text-foreground/80">
                <img src={linkedin} alt="" className="h-7 w-7" />
              </a>
            </div>
            <Lottie animationData={contact} className="w-[350px] mx-auto lg:w-[500px]" />
          </div>
          <form onSubmit={handleSubmit} className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10">
            <h1 className="text-gray-900 text-4xl font-bold mb-7">Contact Me</h1>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <button type="submit" className="bg-red-500 text-white px-3 py-2 rounded-lg">
              Send Message
            </button>
            {isSent && <p className="text-green-500 mt-4">Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
