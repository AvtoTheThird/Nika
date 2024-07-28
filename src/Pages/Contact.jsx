import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import Form from "../Components/Form";
function Contact() {
  return (
    <>
      <Header />
      <div className="flex bg-n_black justify-center py-10 font-['Helvetica']">
        <div className=" lg:flex justify-between gap-10 items-center lg:w-[1060px] lg:h-[68vh] bg-n_black">
          <div className="lg:w-[400px] w-[95vw] flex flex-col gap-3">
            <span className="text-3xl font-bold  text-n_white">Contact Me</span>
            <span className="text-lg   text-n_grey leading-normal">
              Feel free to reach out if you have any questions, opportunities,
              or just want to connect! I'm available for work and always excited
              about new projects and collaborations.
            </span>
            <span className="text-xl font-bold  text-n_white">Email</span>
            <span className="text-lg text-n_grey">
              nikapataridze15@gmail.com
            </span>
            <span className="text-xl font-bold  text-n_white">Mobile</span>
            <span className="text-lg text-n_grey">(+995)-551-51-91-63 </span>
            <span className="text-lg text-n_grey">(+995)-568-80-99-46</span>
            <span className="text-xl font-bold  text-n_white">
              Follow me on
            </span>{" "}
            <div className="flex gap-4 pb-5">
              <a
                href="https://www.linkedin.com/in/nikoloz-pataridze-043a2a237/"
                target="_blank"
              >
                <img
                  src=" Logos\LI-Default.png"
                  className="hover:opacity-75 lg:block "
                  alt=""
                />
              </a>
              <a
                href="https://dribbble.com/BaLErion21"
                class="text-lg"
                target="_blank"
              >
                <img
                  className="hover:opacity-75 lg:block "
                  src=" Logos\Dr-Default.png"
                  alt=""
                />{" "}
              </a>
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>{" "}
      <Footer />
    </>
  );
}

export default Contact;
