import React from "react";
import profileImg from "./assest/profile-img.jpeg"

function About(){
    return(
        <div className="flex flex-col px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mt-20">
            <div ><h1 className=" md:text-3xl font-bold text-center mb-12">About Me</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-6   grid-rows-2 gap-8">
                <div className="row-span-2 flex justify-center md:justify-center"><img className="w-64 h-80 object-cover rounded-xl shadow-xl" src="{aboutImg}" alt=""/>
                </div>
                <div className="space-y-1 text-gray-700 text-base leading-relaxed">
                    <p>I'm an aspiring Frontend Developer passionate about building clean and responsive websites.</p>
                    <p>I'm focused on building real-world projects that showcase clarity and creativity.</p>
                    <p>My goal is not just to write code, but to create digital experiences that are intuitive and enjoyable for users.</p>
                    <p>I enjoy working with React JS and Tailwind CSS, and I'm always looking for ways to grow and contribute.</p>
                </div>
                <div className="space-y-4 ">
                    <div className="flex  gap-6">
                        <div className="w-1/4"><h3 className="text-sm font-medium mb-1">HTML&CSS</h3></div>
                        <div className=" h-2 w-full rounded mt-1.5">
                            <div className="bg-amber-600 h-2 w-4/5 rounded items-center"></div>
                        </div>
                    </div>
                    <div className="flex  gap-6">
                        <div className="w-1/4"><h3 className="text-sm font-medium">Java Script</h3></div>
                        <div className=" h-2 w-full rounded mt-1.5">
                            <div className="bg-amber-600 h-2 w-2/5 rounded items-center"></div>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="w-1/4"><h3 className="text-sm font-medium">React Js</h3></div>
                        <div className=" h-2 w-full rounded mt-1.5">
                            <div className="bg-amber-600 h-2 w-1/5 rounded justify-center items-end  "></div>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="w-1/4"><h3 className="text-sm font-medium">Tailwind</h3></div>
                        <div className=" h-2 w-full rounded mt-1.5">
                            <div className="bg-amber-600 h-2 w-2/5 rounded items-center"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default About;