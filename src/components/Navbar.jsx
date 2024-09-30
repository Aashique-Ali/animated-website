import React, { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

import AnchorLink from "react-anchor-link-smooth-scroll"

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <>
      <div className="bg-bluish flex justify-between px-10 sm:px-20 z-auto  font-semibold  items-center mx-auto  text-white h-24 sticky top-0 ">
        <h1 className="font-semibold text-3xl">Aashique Ali</h1>
        <ul className="hidden md:flex gap-4 justify-center items-center ">
          <AnchorLink href="#home">
            <li className="px-6 py-2 hover:bg-blue-900 rounded-full m-2 cursor-pointer duration-300">
              Home
            </li>
          </AnchorLink>
          <AnchorLink href="#services">
            <li className="px-6 py-2 hover:bg-blue-900 rounded-full m-2 cursor-pointer duration-300">
              Services
            </li>
          </AnchorLink>
          <AnchorLink href="#about">
            <li className="px-6 py-2 hover:bg-blue-900 rounded-full m-2 cursor-pointer duration-300">
              About
            </li>
          </AnchorLink>

          <AnchorLink>
            <li className="px-10 py-2 bg-green-500 hover:bg-green-600 rounded-full  cursor-pointer duration-300">
              Contact
            </li>
          </AnchorLink>
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="block md:hidden cursor-pointer"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed md:hidden right-0 top-[13%] w-[60%] h-full border-t-2 border-slate-600 bg-white text-black pt-5 ease-in-out duration-500"
              : "w-[60%] fixed top-[10%] bottom-0 right-[-100%] ease-in-out duration-500"
          }
        >
          <AnchorLink href="#home">
            <li className="px-6 py-2 hover:bg-gray-400 rounded-full m-2 cursor-pointer duration-300 ">
              Home
            </li>
          </AnchorLink>
          <AnchorLink href="#services">
            <li className="px-6 py-2 hover:bg-gray-400 rounded-full m-2 cursor-pointer duration-300">
              Services
            </li>
          </AnchorLink>
          <AnchorLink href="#about">
            <li className="px-6 py-2 hover:bg-gray-400 rounded-full m-2 cursor-pointer duration-300">
              About
            </li>
          </AnchorLink>

          <AnchorLink>
            <li className="px-10 py-2 text-center bg-green-500 hover:bg-green-600 rounded-xl m-2 cursor-pointer duration-300">
              Contact
            </li>
          </AnchorLink>
        </ul>
      </div>
    </>
  )
}

export default Navbar
