"use client"
import { motion } from "framer-motion";
import { Button } from '@nextui-org/react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react'

const QuemSomosSection = () => {
  return (
    <section id='QuemSomosSection' className="flex max-lg:flex-col justify-center pt-24 pb-6 md:p-24 px-6  bg-[#292824] relative overflow-hidden">
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] z-10 border border-rosa rounded-full border-opacity-20' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] z-10 border border-rosa rounded-full border-opacity-20' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] z-10 border border-rosa rounded-full border-opacity-20 ' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] z-10 border border-rosa rounded-full border-opacity-20 ' />
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="w-full z-10 ">
        <h2
          className="text-center text-4xl md:text-8xl font-bold text-black dark:text-rosa leading-tight">
          <span className='font-thin '>Quem</span><br />somos
        </h2>
        <p
          className="text-balance text-center text-base md:text-lg font-normal text-default-600 max-w-xl mt-4  mx-auto">
          Na Hisa, somos apaixonados por trazer os melhores produtos para nossos clientes. Desde a nossa fundação, temos nos dedicado a distribuir produtos no segmento premium nos melhores pontos de venda. Nossa Distribuição e Logística atende todas as Cidades do Mato Grosso do Sul, Mato Grosso, Goiás, Santa Catarina e o Distrito Federal.
          Somos especialistas em Distribuição de Congelados e produtos Premium.
        </p>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 1 }}
          className='flex flex-col justify-center items-center'>
          <Link href="#MVVSection" passHref>
            <Button color='primary' variant='shadow' size='lg' className="mt-10 flex gap-4 group">
              Veja nosso MVV
              <ArrowRightIcon className='w-5 h-5 group-hover:rotate-90 transition-all duration-200' />
            </Button>
          </Link>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default QuemSomosSection