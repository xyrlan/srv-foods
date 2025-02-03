"use client";
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

const CustomersSection = ({ clients }) => {
  return (
    <div
      id='CustomersSection'
      className=' w-full py-20 md:py-32 container px-4 max-w-5xl'>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
        className="div"
      >
        <h2
          className="text-center text-xl md:text-4xl font-bold text-black dark:text-rosa mb-5">
          <span className='font-thin'>Alguns dos nossos</span> clientes
        </h2>

      </motion.div>
      <div className='flex justify-center md:gap-8 max-md:gap-2 flex-wrap p-3 '>
        {clients.map((client, index) => (
          <div key={client._id}>
            { client.site ?
                <Link href={client.site || "#"} target='_blank' className=' rounded-lg  '>
                  <Image src={client.foto ? urlFor(client.foto).url() : ''} alt={client.nome} width={200} height={200} className='object-contain select-none w-auto h-[4rem] md:h-[8rem] overflow-hidden rounded-lg' />
                </Link>
                :
                <div>
                  <Image src={client.foto ? urlFor(client.foto).url() : ''} alt={client.nome} width={200} height={200} className='object-contain select-none w-auto h-[4rem] md:h-[8rem] overflow-hidden rounded-lg' />
                </div>
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomersSection