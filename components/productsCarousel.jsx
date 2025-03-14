'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, ChatBubbleIcon } from '@radix-ui/react-icons';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

export default function ProductsCarousel({ products }) {
  // Normalizar nomes das marcas
  const normalizeBrand = (brand) => brand.trim().toLowerCase();

  // Agrupar produtos por marca normalizada
  const brands = [...new Set(products.map(product => normalizeBrand(product.marca)))];
  const productsByBrand = brands.reduce((acc, brand) => {
    acc[brand] = products.filter(product => normalizeBrand(product.marca) === brand);
    return acc;
  }, {});

  const [selectedBrand, setSelectedBrand] = useState(brands[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % productsByBrand[selectedBrand].length);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + productsByBrand[selectedBrand].length) % productsByBrand[selectedBrand].length);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const selectedTab = productsByBrand[selectedBrand][selectedIndex];

  return (
    <div className='md:container mx-auto z-10 mt-10'>
      {/* Navegação por marcas */}
      <nav className="rounded-t z-10 dark:bg-stone-900 bg-white px-4 mb-2">
        <ul className="flex lg:flex-wrap w-full overflow-scroll scrollbar-hide">
          {brands.map((brand) => (
            <li
              key={brand}
              className={`flex-1 flex select-none justify-center items-center gap-4 p-2.5 relative cursor-pointer font-semibold text-lg border ${brand === selectedBrand ? 'text-rosa ' : 'text-default-500 hover:text-default-700'}`}
              onClick={() => {
                setSelectedBrand(brand);
                setSelectedIndex(0); // Resetar para o primeiro produto ao trocar de marca
              }}
            >
              <p className='text-nowrap capitalize'>{brand}</p>
              {brand === selectedBrand ? (
                <motion.div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-rosa" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      {/* Carrossel de produtos */}
      <div className="w-full h-full rounded-lg overflow-hidden relative md:p-4 ">
        <Button isIconOnly onPress={handlePrev} className="hidden md:flex items-center gap-3 absolute left-5 top-1/2 -translate-y-1/2 z-20 text-rosa hover:text-rosa/60"><ArrowLeftIcon className='w-6 h-6 ' /></Button>
        <Button isIconOnly onPress={handleNext} className="hidden md:flex item-center gap-3 absolute right-5 top-1/2 -translate-y-1/2 z-20 text-rosa hover:text-rosa/60"> <ArrowRightIcon className='w-6 h-6 ' /></Button>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                handleNext();
              } else if (swipe > swipeConfidenceThreshold) {
                handlePrev();
              }
            }}
            className='flex max-md:flex-col-reverse h-full w-full justify-around items-center rounded-lg md:p-10 px-4'
          >
            <div className='flex flex-col items-center justify-center gap-6 '>
              <h3 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white tracking-wider max-md:mt-4">{selectedTab.nome}</h3>
              <p className='w-full max-w-xl text-center font-medium self-center md:mt-4 md:px-4 text-default-700'>{selectedTab.descricao}</p>
              <div className='flex justify-center my-5'>
                <Link
                  href="https://wa.me/5567999180927"
                  rel="noreferrer"
                  target="_blank"
                  className="text-default-600 transition hover:text-default-600/75 "
                >
                  <Button color='primary' variant='shadow' size='lg'>
                    <ChatBubbleIcon className='w-5 h-5' />
                    Entre em contato
                  </Button>
                </Link>
              </div>
            </div>
            <div className='relative flex items-center justify-center z-20'>
              <div className='absolute bottom-0 left-1/2 -translate-x-1/2 rounded-[50%] shadow-sm shadow-rosa w-[374px] h-[150px] max-lg:w-[300px] max-md:w-[250px] max-sm:w-[200px] max-md:bottom-5 max-sm:h-[100px] z-[-1]' />
              <img
                src={urlFor(selectedTab.foto).url()}
                alt={selectedTab.nome}
                width={500}
                height={320}
                className='object-contain select-none h-[20rem] overflow-hidden relative z-10'
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
