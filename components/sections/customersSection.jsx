"use client";
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';

const CustomersSection = ({ clients }) => {
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
        {clients.map((client, index) => (
          <Link key={client._id} href={client.site} className='flex flex-col items-center justify-center gap-4 p-2 rounded-lg border border-solid border-default-500 '>
            <Image src={urlFor(client.foto).url()} alt={client.nome} width={200} height={200} className='object-contain select-none h-[20rem] overflow-hidden' />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CustomersSection