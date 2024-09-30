import React from "react"
import Service from "../components/Service"
import intergratedMarketing from "../images/integrated-marketing.svg"
import designDevelopment from "../images/design-development.svg"
import digitalStrategy from "../images/digital-strategy.svg"
import digitaMarketing from "../images/digital-marketing.svg"
import growthStrategy from "../images/growth-strategy.svg"
import savingStrategy from "../images/saving-strategy.svg"

const Services = () => {
  return (
    <div className="pl-20 mt-32 sm:mt-0" id="services">
      <p className="text-2xl text-center sm:text-start ">We’re offering</p>
      <h1 className="text-2xl sm:text-4xl font-semibold">
        Creative Web Development
      </h1>
      <div className="flex sm:justify-start justify-center items-center sm:items-start text-center sm:text-inherit gap-14 mt-14 flex-col ">
        <div className="flex flex-col sm:flex-row justify-start items-center gap-16">
          <Service
            image={intergratedMarketing}
            heading={"Integrated Marketing"}
            desc={
              "Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum"
            }
          />
          <Service
            image={designDevelopment}
            heading={"Design & Development"}
            desc={
              "Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum"
            }
          />
          <Service
            image={digitalStrategy}
            heading={"Digital Strategy"}
            desc={
              "Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum"
            }
          />
        </div>
        <div className=" flex flex-col sm:flex-row justify-start items-center gap-16">
          <Service
            image={digitaMarketing}
            heading={"Digital Marketing"}
            desc={
              "Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum"
            }
          />
          <Service
            image={growthStrategy}
            heading={"Growth Strategy"}
            desc={
              "Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum"
            }
          />
          <Service
            image={savingStrategy}
            heading={"Saving Strategy"}
            desc={
              "Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum"
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Services
