"use client";
import React from 'react'
import { motion } from "framer-motion";

const CustomersSection = () => {
  return (
    <div
      id='CustomersSection'
      className=' w-full py-20 md:py-32'>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
        className="div"
      >
        <h2
          className="text-center text-xl md:text-4xl font-bold text-black dark:text-rosa">
          <span className='font-thin'>Alguns dos nossos</span> clientes
        </h2>

      </motion.div>
      <div className='flex justify-start md:gap-x-8 max-md:gap-x-2 flex-wrap p-3  '>

      </div>
    </div>
  )
}

export default CustomersSection