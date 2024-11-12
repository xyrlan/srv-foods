"use client"
import { motion } from "framer-motion";
import React from 'react'

const MVVSection = () => {
  return (

    <section id='MVVSection' className="flex max-lg:flex-col justify-center p-12 px-6 sm:p-24 bg-[#292824]">
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mx-auto max-w-screen-xl flex flex-col items-center px-8 py-16 sm:px-8 lg:px-12 text-gray-100 w-full text-center">
        <h2 className='mb-12'>
          <span className='text-rosa text-5xl font-bold tracking-tight  kristi-regular '>
            Servir
          </span>
          <br />
          <span className='text-white text-2xl font-thin tracking-tight  mb-12 '>Nossa Missão</span>
        </h2>
        <p className=' tracking-wide mb-4 max-w-md' >
        Nossa missão é oferecer aos nossos clientes produtos de alta qualidade que encantem e surpreendam. Trabalhamos com um rigoroso controle de qualidade e uma logística eficiente para garantir que os produtos cheguem sempre frescos e perfeitos até cada ponto de venda.
        </p>

      </motion.div>
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mx-auto max-w-screen-xl flex flex-col items-center px-8 py-16 sm:px-8 lg:px-12 text-gray-100 w-full text-center">
        <h2 className='mb-12'>
          <span className='text-rosa text-5xl font-bold tracking-tight  kristi-regular '>
            Expandir
          </span>
          <br />
          <span className='text-white text-2xl font-thin tracking-tight  mb-12 '>Nossa Visão</span>
        </h2>
        <p className=' tracking-wide mb-4 max-w-md' >
        Queremos ser reconhecidos como a principal distribuidora de produtos premium do Brasil, conhecida pela excelência no atendimento e pela confiabilidade dos nossos serviços. Buscamos constantemente inovar e expandir nossa presença no mercado para atender às demandas dos nossos clientes.
        </p>

      </motion.div>
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mx-auto max-w-screen-xl flex flex-col items-center px-8 py-16 sm:px-8 lg:px-12 text-gray-100 w-full text-center">
        <h2 className='mb-12'>
          <span className='text-rosa text-5xl font-bold tracking-tight  kristi-regular '>
            Disciplina
          </span>
          <br />
          <span className='text-white text-2xl font-thin tracking-tight  mb-12 '>Nossos Valores</span>
        </h2>
        <ul className=' tracking-wide mb-4 max-w-md'>
          <li><span className="text-rosa">Qualidade:</span> Compromisso com a excelência em todos os produtos e serviços oferecidos.;</li>
          <li><span className="text-rosa">Confiabilidade: </span>Garantia de entrega pontual e produtos em perfeitas condições.</li>
        </ul>

      </motion.div>
    </section >


  )
}

export default MVVSection