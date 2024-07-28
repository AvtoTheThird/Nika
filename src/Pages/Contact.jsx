import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import Form from "../Components/Form";
function Contact() {
  return (
    <>
      <Header />
      <div className="flex bg-n_black justify-center py-10 font-['Helvetica']">
        <div className=" flex justify-between gap-10 items-center w-[1060px] h-[68vh] bg-n_black">
          <div className="w-[400px] flex flex-col gap-3">
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
            <div className="flex gap-4">
              <img
                className="w-[40px] h-[40px]"
                src="Logos/Dr-Default.png"
                alt=""
              />
              <img
                className="w-[40px] h-[40px]"
                src="Logos/Dr-Default.png"
                alt=""
              />
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
