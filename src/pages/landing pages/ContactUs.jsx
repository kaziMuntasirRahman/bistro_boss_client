import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEnvelope, FaPaperPlane, FaUser } from 'react-icons/fa';
import PageCover from '../../Components/shared/PageCover';

const ContactUs = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Contact Us | Bistro Boss</title>
      </Helmet>
      <PageCover
        img="/assets/contact/banner.jpg"
        head="Contact Us"
        subHead="We would love to hear from you!"
      />
      <div className="container mx-auto py-12">
        <div className="max-w-2xl mx-auto bg-white p-10 shadow-lg rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(/assets/contact/form-bg.jpg)' }}></div>
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Get in Touch</h2>
          <form className="relative z-10">
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
                <FaUser className="inline-block mr-2" /> Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-emerald-700 transition duration-300 ease-in-out"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
                <FaEnvelope className="inline-block mr-2" /> Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-emerald-700 transition duration-300 ease-in-out"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-emerald-700 transition duration-300 ease-in-out"
                id="message"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-700 hover:to-emerald-900 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out flex items-center"
                type="button"
              >
                <FaPaperPlane className="mr-2" /> Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;