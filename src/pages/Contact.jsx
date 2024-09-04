import React from "react";
import img1 from "../assets/logo.png";
import { MdOutlineMail } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { TfiLocationPin } from "react-icons/tfi";
function Contact() {
  return (
    <div id="Contact" className="p-4 min-h-[70%] md:p-8">
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-8">
        <div className="w-full md:w-1/2 flex  m-2 justify-center">
          <img src={img1} alt="Logo" className="max-w-xs md:max-w-sm" />
        </div>
        <div className="w-full md:max-w-1/2 bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
            Ask a Question
          </h2>
          <form className="space-y-4">
            <div className="bg-slate-100 rounded-md">
              <select className="form-control w-full p-2 rounded-md">
                <option value="">Select Category</option>
                <option value="Partners">Partners</option>
                <option value="Sponsors">Sponsors</option>
                <option value="Participate as team">Participate as team</option>

                <option value="Others">Others</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                className="form-control2 w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                className="form-control2 w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control-text w-full p-2 border rounded-md"
                placeholder="Message"
              ></textarea>
            </div>
            <div className=" flex justify-center bg-white">
              <button
                type="submit"
                name="Submit"
                value="Submit"
                className="contact-sub  bg-green-600 text-white p-2 rounded-md hover:bg-green-800 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="flex-col min-w-[30%] p-2 ">
          <span className=" flex gap-3 items-center justify-center text-xl my-2">
          <MdOutlineMail />
            <a href="mailto:Mohammedabdulrahman@ieee.org" className="hover:underline"> Mohammedabdulrahman@ieee.org</a>
          </span>
          <span className=" flex gap-3 my-2 items-center justify-center text-xl"> 
          <MdAddCall />
            <a href="tel:+91 8008243308">+91 8008243308</a> <a href="tel:+91 9951150501">+91 9951150501</a>
          </span>
          
          <span className=" flex gap-3 my-2 items-center justify-center text-xl">
          <BsTwitterX />
            <a href="https://x.com/IEEE_GNITC">x-twitter</a>
          </span>
          <span className=" flex my-2 gap-3 items-center justify-center text-xl">
          <FaInstagram />
            <a href="https://www.instagram.com/ieee_gnitc/">Instagram</a>
          </span>
          <span className=" my-2 flex gap-3 items-center justify-center text-xl">
          <span className="text-2xl"><TfiLocationPin /></span>
            <a href="https://www.google.com/maps/dir//5M66%2BX3V,+Unnamed+Road,+Ibrahimpatnam,+Telangana+501506/@17.1619862,78.6456483,13.46z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3bcb09dabc04d5b9:0x333765a35bb449cd?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D">Gurunanak Institute of Technology </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
