"use client"
import React from 'react'
import { motion } from "framer-motion";
import ProductsCarousel from '../productsCarousel';

const ProductsSection = ( { products } ) => {
  return (
    <div 
    id='ProductsSection'
    className=' w-full py-20 md:py-32'>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
        className="div"
        >
        <h2
          className="text-center text-2xl md:text-4xl font-bold text-black dark:text-rosa">
          <span className='font-thin'>Alguns dos nossos</span> produtos
        </h2>
        <p
          className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-xl mt-2 mx-auto">
          Importamos produtos que estão em alta e que possuem alto valor de mercado. Vendemos e entregamos o MELHOR!
        </p>
      </motion.div>

      <ProductsCarousel products={products} />

    </div>
  )
}

export default ProductsSection