import React from "react"

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="flex justify-center  ">
      <div className="w-full h-1/10 group flex items-center justify-center   dark:text-black bg-gradient-to-r from-green-200 to-sky-400 ">
        <div className="w-10 h-[6px] bgOpacity flex justify-center relative">{<span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>}</div>

        <div className="w-full  hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex justify-center items-center flex-col gap-6 lgl:gap-10 shadow-shadowOne">
          <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
            <div className="">
              <h3 className="text-xl md:text-2xl font-semibold group-hover:text-purple-600 duration-300">{title}</h3>
              <p className="text-sm mt-2 text-black-400 group-hover:text-purple-600 duration-300">{subTitle}</p>
            </div>
            <div>
              <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">{result}</p>
            </div>
          </div>
          <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">{des}</p>
        </div>
      </div>
    </div>
  )
}

export default ResumeCard
