import { FaLinkedin, FaInstagram, } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";


const Footer = () =>{
  function scrollToTop() {
    window.scrollTo(0, 0);
}
    return (
        <div className="flex flex-wrap bg-orange-500  justify-center">
        {/* Box 1 */}
        <div className="w-full md:w-1/3 p-4">
          <div className="p-4 h-full rounded-lg flex text-white flex-col justify-center items-center">
            <h2
              className="text-2xl font-bold text-left"
              style={{
                fontFamily: "'MuseoModerno', sans-serif",
                color: "white",
              }}
            >
              Ligovis
            </h2>
            <p className="lg:text-center xs:text-start">
              It's a simple yet important notice that underscores the commitment
              to protecting the creative works and upholding the rights under
              copyright law.
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-full md:w-1/3 px-4">
          <div className="lg:p-4 xs:p-4 lg:pt-10 lg:pl-32 h-full rounded-lg flex flex-col text-white">
            <h1 className=" text-white xs:text-center md:text-left text-2xl">QuickLinks</h1>
            <div className="flex lg:pt-4 xs:pt-2 text-start">
           <Link to="/" className="text-white hover:text-black"  onClick={scrollToTop}>Home</Link>
            </div>
            <div className="flex text-center mt-2">
        <Link to="/privacy-policy" onClick={scrollToTop}>Privacy Policy</Link>
      </div>
      <div className="flex text-left mt-2">
        <Link to="/terms-and-conditions" onClick={scrollToTop}>Terms & Conditions</Link>
      </div>
      <div className="flex text-left mt-2">
        <Link to="/refund-policy" onClick={scrollToTop}>Refund Policy</Link>
      </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="w-full md:w-1/3 p-4">
          <div className="lg:p-4 xs:p-4 lg:pt-0 h-full rounded-lg flex flex-col text-white justify-center items-center">
            <h2 className="text-3xl font-semibold ">Follow Us</h2>
            <div className="flex mt-2">
              <a href="https://www.linkedin.com/in/Ligovis/" className="mr-2 hover:text-[#0072b1]">
                <FaLinkedin className="h-9 w-9" />
              </a>
              <a href="#twitter" className="mr-2 hover:text-[#1da1f2]">
                <FaXTwitter className="h-9 w-9" />
              </a>
              <a href="https://www.instagram.com/ligovis/" className="mr-2 hover:text-pink-400">
                <FaInstagram className="h-9 w-9 " />
              </a>
              <a
                href="mailto:learn@ligovis.com"
                className="mr-2 hover:text-white"
              >
                <IoMail size={24} className="h-9 w-9" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full text-center pb-4">
          <p className="text-white text-lg">
            &copy; {new Date().getFullYear()} Ligovis. All rights reserved.
          </p>
        </div>
      </div>
    )
}
export default Footer;