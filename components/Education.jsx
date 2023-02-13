import React from "react"
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard"

const Education = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
      {/* part one */}
      <div>
        <div className="m-10 py-10 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-4xl  md:text-4xl font-bold inline   dark:text-white">Education</p>
        </div>
        <div className="mx-auto mt-6 lgl:mt-14 w-2/3  flex flex-col gap-10 ">
          <ResumeCard title="BE in Computer Science and Engineering" subTitle="Sir M. Visvesvaraya Institute of Technology(2019 - 2023)" result="9.32/10" />

          <ResumeCard title="Higher Secondary School Education" subTitle="The Shishukunj International School (2018 - 2019)" result="89%" />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-10 m-10 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl  inline   md:text-4xl font-bold dark:text-white">Work Experience</h2>
        </div>
        <div className=" mx-auto mt-6 lgl:mt-14 w-2/3  flex flex-col gap-10">
          <ResumeCard title="Student Intern" subTitle="Nokia  - (2023 - Present)" result="Bengaluru" />
          <ResumeCard title="Backend Intern" subTitle="Kidex - (3 months)" result="WFH" />
        </div>
      </div>
    </motion.div>
  )
}

export default Education
