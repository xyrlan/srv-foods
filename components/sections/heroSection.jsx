"use client"
import React, { useRef } from 'react'
import { GlobeDemo } from '../globeComponent'
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from '@nextui-org/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import LinksComponent from '../LinksComponent';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {

  return (
    <motion.main
      id='MainContent'
      className="flex max-md:flex-col-reverse py-24 md:py-32 px-4 items-center justify-center max-md:gap-20 h-screen md:h-auto dark:bg-stone-900 bg-white relative w-full">

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
        className="w-full flex flex-col items-center">
        <Image src="/hisalogo.png" alt="About" width={1000} height={1000} className='object-contain max-lg:overflow-hidden h-20 mb-10 max-md:hidden' />
        <h2
          className="text-center text-2xl md:text-4xl font-bold text-black dark:text-rosa max-w-xl mx-auto my-2">
          Distribuição inteligente  <span className='font-thin'>para vários estados do Brasil.</span>
        </h2>
        <p
          className="text-center text-base md:text-lg font-normal text-default-600 max-w-xl mt-2 mx-auto max-md:px-5">
          Sua conexão global para importação, exportação e distribuição de diversos produtos. Com a Hisa, você tem acesso a qualidade, confiabilidade e excelência em serviços logísticos.
        </p>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 2.5 }}
          className='flex flex-col justify-center items-center'>
          <Link href="#AboutSection" passHref>
            <Button color='primary' variant='shadow' size='lg' className="mt-10 flex gap-4 group">
              O que fazemos
              <ArrowRightIcon className='w-5 h-5 group-hover:rotate-90 transition-all duration-200' />
            </Button>
          </Link>
          <LinksComponent />
        </motion.div>
      </motion.div>
      <motion.div
        // style={{ translateY, translateX }}
        className='w-full z-20'>
        <GlobeDemo />
      </motion.div>


    </motion.main>
  )
}

export default HeroSection