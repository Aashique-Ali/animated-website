import { useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Services from "./pages/Services"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div className=" fixed top-0 left-0 w-[100%] z-100 ">
        <Navbar />
      </div>
      <Home />
      <Services />
      <About />
      <Footer />
    </>
  )
}

export default App
