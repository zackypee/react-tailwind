// import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";



function Contact(){
    return(
        <div id="#contact">
            <div>
                <h1 className="text-3xl font-bold text-center mt-8">Get In Touch</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-start gap-10 mt-16  mx-auto max-w-5xl px-4  ">
                <div className="flex flex-col w-full md:w-1/2 justify-center ">
                    <div className="flex flex-col w-full ">
                        <h1 className="text-2xl font-bold mb-4">Let's talk</h1>
                        <p className="text-md text-start">I'm currently available to take new projects, so feel free to send me a message about anything 
                            you want me to work on. You can contact anytime</p>
                    </div>
                    <div className="flex gap-2 mt-4 items-center">
                        <MdEmail className="text-xl text-blue-600" />
                        <p>Zackypee@gmail.com</p>
                    </div>
                     <div className="flex gap-2 mt-4 items-center">
                        <MdPhone className="text-xl text-blue-600" />
                        <p>+2347012349809</p>
                    </div>
                     <div className="flex gap-2 mt-4 items-center">
                        <MdLocationOn className="text-xl text-blue-600" />
                        <p>Lagos, Nigeria</p>
                    </div>
                </div>
                <div className=" md:w-1/2 w-full">
                    <form className="flex flex-col space-y-4" action="">
                        <label  htmlFor="">
                            Your Name
                            <input className="w-full p-2 border rounded" type="text" />
                        </label>
                        <label>
                            Your Email
                            <input  className="w-full p-2 border rounded"  type="text" />
                        </label>
                        <label >
                            Write your message
                            <textarea  className="w-full p-2 border rounded h-32"  name="" id=""></textarea>
                        </label>

                    </form>
                    <button className="bg-blue-600 text-white px-2 py-2 rounded hover:bg-blue-700 transition mt-4">
                        submit now
                    </button>
                </div>
            </div>


        </div>
    );
}

export default Contact;