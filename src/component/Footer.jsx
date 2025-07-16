import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function Footer(){
    return(
        <div className="bg-blue-500 w-full flex flex-col mt-8">
            <div className="flex gap-4 my-4 justify-center items-center">
                <div className="flex gap-4">
                    <a className="size-4" href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a className="size-4" href="https://x.com/pheeta8" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a className="size-4" href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <hr />
                </div>

            </div>
            <div className="text-center">
                <p className="text-md italic font-light mb-2">@2025 by Zackypee proudly created with React and Tailwind</p>
            </div>
        </div>
    )
}

export default Footer;