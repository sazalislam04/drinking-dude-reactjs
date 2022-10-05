import React from "react";
import img from "../../img/contact.png";
import "./Contact.css";
const Contact = () => {
  const handleOnChange = (e) => {
    e.preventDefault();
  };
  return (
    <div className="px-10 lg:px-20 lg:h-[95vh] h-full p-5 bg-gray-800 lg:flex items-center">
      <div data-aos="zoom-in-right" data-aos-duration="1000">
        <img className="w-full mb-10 lg:mb-0" src={img} alt="" />
      </div>
      <div>
        <form
          onSubmit={handleOnChange}
          action=""
          className="shadow-md contact rounded-md "
          data-aos="zoom-in-left"
          data-aos-duration="1500"
        >
          <div className="mb-4  md:flex block gap-3 text-white">
            <input
              className="p-2 w-full mb-4 md:mb-0 bg-gray-800 rounded focus:outline-none border-green-400 border"
              type="text"
              placeholder="First Name"
            />
            <input
              className="p-2 w-full rounded bg-gray-800 focus:outline-none border-green-400 border"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4 md:flex block gap-3 text-white">
            <input
              className="p-2 w-full mb-4 md:mb-0 bg-gray-800 rounded focus:outline-none border-green-400 border"
              type="email"
              placeholder="Email"
            />
            <input
              className="p-2 w-full bg-gray-800 rounded focus:outline-none border-green-400 border"
              type="number"
              placeholder="Phone"
            />
          </div>
          <div>
            <textarea
              className="w-full p-2 bg-gray-800 rounded focus:outline-none border-green-400 border text-white resize-none"
              name=""
              id=""
              rows="5"
              placeholder="Type Your Message"
            ></textarea>
          </div>
          <button className="bg-green-500 px-8 py-2 mt-2 rounded text-white text-xl">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
