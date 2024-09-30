import React from "react"
import intergratedMarketing from "../images/integrated-marketing.svg"

const Service = ({ image, heading, desc }) => {
  return (
    <div>
      <div className=" justify-center items-center sm:items-start flex flex-col gap-2 w-[300px]">
        <img src={image} alt="" className="w-[50px] " />
        <h1 className="font-semibold">{heading}</h1>
        <p className="text-gray-600 sm:text-start">{desc}</p>
      </div>
    </div>
  )
}

export default Service
