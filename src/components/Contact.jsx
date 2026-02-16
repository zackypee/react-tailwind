import React from "react";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function Contact(){
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.5 }
        }
    };

    return(
        <motion.div 
          id="contact" 
          className="scroll-mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
            <motion.div variants={itemVariants}>
                <h1 className="text-3xl font-bold text-center mt-8 text-gray-900 dark:text-white">
                  Get In Touch
                </h1>
            </motion.div>
            
            <div className="flex flex-col md:flex-row justify-center items-start gap-10 mt-16 mx-auto max-w-5xl px-4">
                <motion.div 
                  className="flex flex-col w-full md:w-1/2 justify-center"
                  variants={containerVariants}
                >
                    <motion.div className="flex flex-col w-full" variants={itemVariants}>
                        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                          Let's talk
                        </h1>
                        <p className="text-md text-start text-gray-600 dark:text-gray-300">
                          I'm currently available to take new projects, so feel free to send me a message about anything 
                          you want me to work on. You can contact anytime
                        </p>
                    </motion.div>
                    
                    {[
                      { Icon: MdEmail, text: "Zackypee@gmail.com" },
                      { Icon: MdPhone, text: "+2347012349809" },
                      { Icon: MdLocationOn, text: "Lagos, Nigeria" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex gap-3 mt-6 items-center"
                        variants={itemVariants}
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <item.Icon className="text-2xl text-blue-600 dark:text-blue-400" />
                        </motion.div>
                        <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
                      </motion.div>
                    ))}
                </motion.div>
                
                <motion.div 
                  className="md:w-1/2 w-full"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                    <form className="flex flex-col space-y-5" action="">
                        <motion.label 
                          htmlFor="name" 
                          className="text-gray-700 dark:text-gray-300"
                          whileFocus={{ scale: 1.02 }}
                        >
                            Your Name
                            <motion.input 
                              id="name"
                              className="w-full p-3 mt-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300" 
                              type="text"
                              whileFocus={{ scale: 1.01 }}
                            />
                        </motion.label>
                        
                        <motion.label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                            Your Email
                            <motion.input 
                              id="email"
                              className="w-full p-3 mt-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300" 
                              type="email"
                              whileFocus={{ scale: 1.01 }}
                            />
                        </motion.label>
                        
                        <motion.label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                            Write your message
                            <motion.textarea 
                              id="message"
                              className="w-full p-3 mt-2 border border-gray-300 dark:border-gray-600 rounded-lg h-32 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none" 
                              name="message"
                              whileFocus={{ scale: 1.01 }}
                            ></motion.textarea>
                        </motion.label>
                    </form>
                    
                    <motion.button 
                      className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg mt-6"
                      whileHover={{ 
                        scale: 1.05, 
                        y: -3,
                        boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        Submit Now
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Contact;