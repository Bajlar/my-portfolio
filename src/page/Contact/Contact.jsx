import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z6pc2uo",
        "template_rrxosg6",
        form.current,
        "G3bfCbdJHEAXSVre-"
      )
      .then(
        (result) => {
          // console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section
        id="contact"
        className="my-4 px-6 bg-[#faf6f6] md:h-min-[500px] md:px-24"
      >
        <h2 className="text-3xl py-8 uppercase text-center text-[#ff014f] font-bold">
          Contact me
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 pb-8">
          <div className="md:w-2/3 flex flex-col gap-5">
            <div className="bg-white shadow-2xl p-5 rounded-lg text-center mb-2">
              <div className="flex justify-center items-center text-3xl mb-3">
                <MdOutlineEmail />
              </div>
              <h4 className="text-lg font-semibold">Email</h4>
              <h5 className="text-lg font-medium">
                mdbajlarrahman1007@gmail.com
              </h5>
              <a href="mailto:mdbajlarrahman1007@gmail.com" target="_blank">
                <button className="btn btn-sm mt-2">Send a message</button>
              </a>
            </div>
            <div className="bg-white shadow-2xl p-5 rounded-lg text-center mb-2">
              <div className="flex justify-center items-center text-3xl mb-3">
                <RiMessengerLine />
              </div>
              <h4 className="text-lg font-semibold">Messenger</h4>
              <h5 className="text-lg font-medium">Bajlar Rahman</h5>
              <a
                href="https://www.facebook.com/profile.php?id=100006694475266"
                target="_blank"
              >
                <button className="btn btn-sm mt-2">Send a message</button>
              </a>
            </div>
            <div className="bg-white shadow-2xl p-5 rounded-lg text-center mb-2">
              <div className="flex justify-center items-center text-3xl mb-3">
                <FaWhatsapp />
              </div>
              <h4 className="text-lg font-semibold">What's App</h4>
              <h5 className="text-lg font-medium">+8801767112910</h5>
              <a
                href="https://web.whatsapp.com//send?phone+8801767112910"
                target="_blank"
              >
                <button className="btn btn-sm mt-2">Send a message</button>
              </a>
            </div>
          </div>
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-5"
            >
              <input
                className="w-full p-4 rounded-md border-1 shadow-md"
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
              />
              <input
                className="w-full p-4 rounded-md border-1 shadow-md"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                className="w-full p-4 rounded-md border-1 shadow-md resize-none"
                name="message"
                id=""
                cols="30"
                rows="7"
                placeholder="Your Message"
                required
              ></textarea>
              <button className="btn btn-secondary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
