"use client"
import React from 'react'
import { motion } from "framer-motion";
import { Button } from '@nextui-org/react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <div
    id='AboutSection'
      className="flex max-md:flex-col py-14 md:py-32 px-4 items-center justify-center md:h-auto dark:bg-stone-900 bg-white relative w-full overflow-hidden md:gap-20"
    >
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] z-10 border border-rosa rounded-full border-opacity-20 ' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] z-10 border border-rosa rounded-full border-opacity-20' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] z-10 border border-rosa rounded-full border-opacity-20 ' />
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
        className="z-10 ">
        <h2
          className="text-center text-4xl md:text-8xl font-bold text-black dark:text-rosa leading-tight">
          <span className='font-thin '>O que</span><br />fazemos
        </h2>
        <p
          className="text-balance text-center text-base md:text-lg font-normal text-default-600 max-w-xl mt-4  mx-auto">
        Estabelecemos nossa rotas comerciais e logisticas, para que tenhamos sempre um ótimo rendimento e positivação nas vendas e entregas. Nossa logística é própria e nova, para garantir que entregaremos sempre o melhor produto e pequenos intervalos para que não haja rupturas nos pontos de vendas e para garantir que os clientes sempre comprem a mesma qualidade que o produto sai de sua unidade Fabril.
        </p>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 1 }}
          className='flex flex-col justify-center items-center'>
          <Link href="#ProductsSection" passHref>
            <Button color='primary' variant='shadow' size='lg' className="mt-10 flex gap-4 group">
              Conheça Nossos Produtos
              <ArrowRightIcon className='w-5 h-5 group-hover:rotate-90 transition-all duration-200' />
            </Button>
          </Link>
        </motion.div>

      </motion.div>
      <motion.img
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      src="/bonequinhos.png" alt="About" width={1000} height={1000} className='object-contain overflow-hidden ' />
    </div>
  )
}

export default AboutSection