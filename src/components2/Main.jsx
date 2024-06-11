import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import humanLogo from "./../assets/humans-removebg-preview.png";
import "./Main.css";
import whatsappLogo from "../assets/whatsapp.png"

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);
  

  return (
    <div className="flex flex-col mx-4 ">
     
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 relative lg:mt-12">
        <div
          className="lg:ml-10 lg:mt-8 md:mt-20 flex-shrink-0 text-content xs:order-2 order-1 "
          data-aos="fade-right"
        >
          <p className="md:text-left lg:text-left sm:text-center lg:text-5xl xs:text-2xl font-[Noto sans sans font-serif] text-orange-600 tracking-wider">
            <span className="font-'Aldrich' ">Unveil</span> Your potential
          </p>
          <p className="lg:text-3xl text-2xl sm:text-center md:text-left lg:text-left font-[Noto sans sans font-serif] text-orange-600 tracking-wider mt-2 lg:mt-3">
            Take the first step in <b className="text-black">Learning!</b>
          </p>
          <div className="text-xl font-semibold text-start mt-8">
            <p className="pl-2">
              "Discover Ligovis, your personalized learning platform. Dive into beginner-friendly courses and start your learning
              journey."
            </p>
            
          </div>
        </div>
        <div
          className="lg:justify-self-end md:justify-self-end justify-self-center xs:order-1 order-2"
          data-aos="fade-left"
        >
          <img id ="home-img" src={humanLogo} alt="img" width={400} />
        </div>
      </div>
      <div className="fixed-bottom right-100 p-3 " style={{ zIndex: "6", left: "initial" }}>
<a href="https://wa.me/917671091557?text=Hello?" target="_blank">
<img src={whatsappLogo} width="60" alt="aaaa" className="xs:h-[46px] xs:w-[46px] lg:w-[56px] lg:h-[56px]" />
</a>
</div>
    </div>
  );
};

export default Main;

