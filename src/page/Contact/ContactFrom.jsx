import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactFrom = () => {
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
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message send successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="md:w-1/2 ">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
        <input
          className="w-full p-4 rounded-md border-1 shadow-sm"
          type="text"
          name="name"
          placeholder="Your Full Name"
          required
        />
        <input
          className="w-full p-4 rounded-md border-1 shadow-sm"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="w-full p-4 rounded-md border-1 shadow-sm resize-none"
          name="message"
          id=""
          cols="30"
          rows="7"
          placeholder="Your Message"
          required
        ></textarea>
        <button className="btn bg-primary hover:bg-secondary text-white capitalize rounded-3xl">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactFrom;
