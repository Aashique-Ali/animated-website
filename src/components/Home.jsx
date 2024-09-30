import React from "react"
import team from "../images/group.png"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className="" id="home">
      <div className="home px-10 sm:px-20 flex flex-col sm:flex-row justify-between  ">
        <div>
          <h1 className="text-white text-3xl font-bold pt-44 w-[350px] sm:w-[430] ">
            I have Helped Power Hundreds Of Business Websites in 10+ Countries
          </h1>
          <p className="text-white  mt-4 w-[350px] sm:w-[570px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <button className="px-8 mt-5 font-medium bg-blue-500 text-white py-2 rounded-full">
            Learn more
          </button>
        </div>
        <motion.div>
          <img src={team} alt="" className="w-[350px]  sm:mt-48" />
        </motion.div>
      </div>
    </div>
  )
}

export default Home
