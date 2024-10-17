import { CONTACT } from "../constants";
import {  motion } from "framer-motion"
import Swal from 'sweetalert2'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f55367a3-1b2d-4470-8f90-643b464f4295");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5}}
        className="my-10 text-center text-4xl">Contact Us</motion.h2>
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-center tracking-tighter max-w-md w-full mx-auto p-1 bg-inherit rounded-lg shadow-md">
        <form onSubmit={onSubmit} >
          <div className="mb-4">
            <label className="block text-white text-md font-semibold mb-2" htmlFor="">Name</label>
            <input placeholder="xyz" name="name" className="w-full px-3 py-2 border rounded-lg bg-inherit focus:outline-none focus:border-blue-500" required type="text" />
          </div>
          <div className="mb-4">
            <label className="block text-white text-md font-semibold mb-2" htmlFor="">Email</label>
            <input placeholder="xyz@example.com" name="email" className="w-full px-3 py-2 border rounded-lg bg-inherit focus:outline-none focus:border-blue-500" required type="text" />
          </div>
          <div className="mb-4">
            <label className="block text-white text-md font-semibold mb-2" htmlFor=""> Message</label>
            <textarea rows='4' placeholder="Type your message here....." name="message" className="w-full px-3 py-2 border rounded-lg bg-inherit focus:outline-none focus:border-blue-500" required type="text" />
          </div>
          <div>
            <button type="submit" className="bg-gradient-to-r from-pink-400 via-slate-600 to-purple-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 focus:outline-white">Submit</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
