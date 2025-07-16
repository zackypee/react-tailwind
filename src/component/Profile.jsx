import React from "react";
 

function Profile(){
    return(
        <div className="container flex flex-col mx-auto top-0 mt-32 justify-center items-center my-12 ">
            <img src="./src/assets/git.jpeg" alt="" className="w-48 h-48 rounded-full object-cover justify-self-center" />
           <div>
             <h1 className="text-3xl text-start  mt-4 md:text-4xl  leading-tight font-bold  md:text-center inline-block max-w-3xl mx-auto px-4   ">
                <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">I'm Olatunji Peter,
                    </span> Aspiring Front-end Developer based in Nigeria.
            </h1>
            <p className="md:text-center text-start px-4">
                I'm passionate about building clean, user-friendly websites.  Always learning, always coding
            </p>
           </div>
            <div className="flex ">
                <button className="px-4 py-2 mt-4 bg-blue-600 text-white hover:bg-blue-700 rounded-md mx-4 cursor-pointer">Connect With Me</button>
                <button className="px-4 py-2 mt-4 bg-blue-600 text-white hover:bg-blue-700 rounded-md mx-4 cursor-pointer">My resume</button>
            </div>
        </div>

    );
}

export default Profile;
