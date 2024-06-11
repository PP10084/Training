import { useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";

const Header = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
      setIsOpen(!isOpen);
    };

return (<nav className="p-4">
        <div className="flex justify-between items-center " id="header-section">
          {/* Left Side */}
          <div>
            <h1
              className="lg:text-4xl xs:text-3xl  font-semibold tracking-[8px]"
              style={{
                fontFamily: "MuseoModerno",
              }}
            >
              Ligovis
            </h1>
            <p
              className=" text-sm"
              style={{ fontFamily: "askara" }}
            >
              TECHNICAL SOLUTIONS
            </p>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden">
            <button onClick={toggleNav} className="">
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Right Side (Desktop) */}
          <div className="hidden text-orange-500 lg:flex items-center mr-6">
            <button className="ml-4 text-2xl font-bold underline-effect" >
               <Link to="/" className="text-inherit no-underline hover:text-inherit">Home</Link> </button>
            <button className=" ml-4 text-2xl font-bold underline-effect">
              <Link to="/blogs" className="text-inherit no-underline hover:text-inherit">Blogs</Link>
              </button>
            <button className=" ml-4 text-2xl font-bold ">| <span className="underline-effect"> <Link to="/verify" className="text-inherit no-underline hover:text-inherit">Verify</Link></span></button>
          </div>
        </div>

        {/* Collapsed Menu (Mobile) */}
        <div
          className={`lg:hidden text-orange-500 font-bold  ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <button className="block  py-2 pt-4 w-full font-bold text-xl text-left">
            <Link to="/" className="text-inherit no-underline hover:text-inherit">Home</Link>
          </button>
          <button className="block  py-2  w-full font-bold text-xl text-left">
          <Link to="/blogs" className="text-inherit no-underline hover:text-inherit" >Blogs</Link>
          </button>
          <button className="block  py-2 w-full font-bold text-xl text-left">
          <Link to="/verify" className="text-inherit no-underline hover:text-inherit">Verify</Link>
          </button>
        </div>
      </nav>)}
      export default Header;