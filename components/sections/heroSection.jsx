"use client"
import React, { useRef } from 'react'
import { GlobeDemo } from '../globeComponent'
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from '@nextui-org/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';

const HeroSection = () => {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start']
  })

  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const translateX = useTransform(scrollYProgress, [0, 0.3], [0, 400])


  const translateYText = useTransform(scrollYProgress, [0, 0.4], [0, 400])
  const translateXText = useTransform(scrollYProgress, [0, 0.3], [0, -400])

  return (
    <motion.main
      ref={targetRef}
      className="flex row-start-2 py-32 px-4 items-center justify-center h-screen md:h-auto dark:bg-stone-900 bg-white relative w-full">
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
        // style={{ translateY: translateYText, translateX: translateXText }}
        className="w-full">
        <h2
          className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
          Importamos para vários estados do Brasil.
        </h2>
        <p
          className="text-center text-base md:text-lg font-normal text-default-600 max-w-xl mt-2 mx-auto">
          Sua conexão global para importação, exportação e distribuição de diversos produtos. Com a SRV, você tem acesso a qualidade, confiabilidade e excelência em serviços logísticos.
        </p>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 2.5 }}
          className='flex justify-center'>
          <Button color='primary' variant='shadow' size='lg' className="mt-10 flex gap-4 group">
            Conheça Nossos Produtos
            <ArrowRightIcon className='w-5 h-5 group-hover:rotate-90 transition-all duration-200' />
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        // style={{ translateY, translateX }}
        className='w-full h-full'>
        <GlobeDemo />
      </motion.div>
    </motion.main>
  )
}

export default HeroSection