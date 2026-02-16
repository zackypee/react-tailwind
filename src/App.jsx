// // import './App.css'

// import Contact from "./component/Contact"
// import About from "./component/About"
// import NavSection from "./component/NavSection"
// import Profile from "./component/Profile"
// import Footer from "./component/Footer"


// function App() {
 

//   return (
//     <div>
//       <NavSection />
//       <Profile />
//       <About />
//       <Contact /> 
//       <Footer />
//     </div>
//   )
// }

// export default App

import React from 'react'
import { DarkModeProvider } from "./components/DarkModeContext";
import NavSection from "./components/NavSection";
import Profile from "./components/Profile";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <NavSection />
        <main>
          <Profile />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;