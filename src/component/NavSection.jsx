import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function NavSection(){
    const navLinks = [
    {href: "#home", label: "Home"},
    {href: "#about", label: "About Me"},
    {href: "#experience", label: "Experience"},
    {href: "#contact", label: "Contact"}
    ];

    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');


    return(
        <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
          <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
              <div className="text-xl font-bold text-blue-600">
                 Zackypee
              </div>

              {/* Mobile menue button */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}  className="md:hidden p-2">
                {
                    isMenuOpen ? <HiX className="size-6"/> : <HiMenu className="size-6" />
                }

              </button>



              <div className="hidden md:flex gap-10 items-center">
                   {
                    navLinks.map((link,index) => (
                        <a key={index} href={link.href} 
                        onClick={() => setActiveLink(link.href)}
                        className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                           hover:after:w-full after:bg-blue-600 after:transition-all ${activeLink === link.
                           href ? "text-blue-600 after:w-full": "text-gray-600 hover:text-gray-900"} `}>
                            {link.label}
                        </a>
                    ))  
                   }
              </div>

              <button className="hidden md:block px-6 py-2.5 bg-blue-600 text-white hover:bg-blue-700 rounded-lg
               mx-4 cursor-pointer text-sm transition-all hover:shadow-lg">
                 download resume
              </button>
          </div>

          {
            isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 py-4">
                    <div className="container mx-auto px-4 space-y-4">
                        {navLinks.map((link, index) => (
                            <a className={`block text-sm font-medium py-2 ${activeLink === link.href ? "text-blue-600" : 
                                "text-gray-600 hover:text-gray-900"}`} href={link.href}>{link.label}
                            </a>
                        ))}

                        <button className="w-full  px-6 py-2.5 bg-blue-600 text-white hover:bg-blue-700 rounded-lg
                               cursor-pointer text-sm transition-all hover:shadow-lg">
                             download resume
                        </button>


                    </div>
                </div>
            )
          }
        </nav>
    );
}


export default NavSection;