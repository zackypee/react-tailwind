import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/git.jpeg"

function Profile(){
    return(
        <div id="home" className="container flex flex-col mx-auto pt-32 scroll-mt-20 justify-center items-center my-12 px-4">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img 
                src={profileImg} 
                alt="Profile" 
                className="w-48 h-48 rounded-full object-cover shadow-2xl ring-4 ring-blue-500/20 dark:ring-blue-400/20 transition-all duration-300 hover:scale-105 hover:ring-8" 
              />
              <motion.div 
                className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-3xl text-start mt-8 md:text-4xl leading-[1.7] font-bold md:text-center inline-block max-w-3xl mx-auto px-4">
                <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
                  I'm Olatunji Peter,
                </span>{" "}
                <span className="text-gray-900 dark:text-white">
                  Aspiring Front-end Developer based in Nigeria.
                </span>
              </h1>
              <p className="md:text-center text-start px-4 mt-4 text-gray-600 dark:text-gray-300">
                I'm passionate about building clean, user-friendly websites. Always learning, always coding
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
                <motion.button 
                  className="px-6 py-3 mt-4 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 rounded-lg cursor-pointer"
                  whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Connect With Me
                </motion.button>
                <motion.button 
                  className="px-6 py-3 mt-4 bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white rounded-lg cursor-pointer"
                  whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  My Resume
                </motion.button>
            </motion.div>
        </div>
    );
}

export default Profile;