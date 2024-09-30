import React from "react"
import idea from "../images/idea.png"
import tick from "../images/tick.png"

const About = () => {
  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-between "
      id="about"
    >
      <div className="mt-20 px-20 flex  flex-col gap-3 ">
        <p className="text-2xl">Our work process</p>
        <h1 className="text-4xl font-semibold">Discover New Idea With Us!</h1>
        <p className="text-2xl">Imagination will take us everywhere</p>
        <div className="font-bold text-gray-600">
          <p>Lorem ipsum dolor sit amet,</p>
          <p>pretium pretium tempor.Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className="text-gray-500 font-medium flex flex-col gap-2">
          <div className="flex justify-start items-center gap-2">
            <img src={tick} alt="" className="w-[20px]" />
            <p> Lorem ipsum dolor sit amet, pretium pretium</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <img src={tick} alt="" className="w-[20px]" />
            <p> Lorem ipsum dolor sit amet, pretium pretium</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <img src={tick} alt="" className="w-[20px]" />
            <p> Lorem ipsum dolor sit amet, pretium pretium</p>
          </div>
        </div>
      </div>
      <div>
        <img src={idea} alt="" className="mt-20 pr-14 " />
      </div>
    </div>
  )
}

export default About
