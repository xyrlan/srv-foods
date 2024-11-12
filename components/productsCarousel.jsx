'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, ChatBubbleIcon } from '@radix-ui/react-icons';
import { Button } from '@nextui-org/react';
import Image from 'next/image';

export default function ProductsCarousel() {
  const tabs = [
    {
      title: 'Franuí',
      description: 'Framboesas frescas banhadas em dois chocolates Receita da Patagônia ✨Sem glúten, produto que esta super em alta no Brasil.',
      picture: '/franu.png',
      color: '#f06c7c',
    },
    {
      title: 'Toblerone',
      description: 'Toblerone e muito bom',
      picture: '/toblepng.png',
      color: '#fcac0a',
    },
    {
      title: 'Milka',
      description: 'Milka e muito bom',
      picture: '/milkapng.png',
      color: '#704ca4',
    },
    {
      title: 'Milka',
      description: 'Milka e muito bom',
      picture: '/milkapng.png',
      color: '#704ca4',
    },
    {
      title: 'Milka',
      description: 'Milka e muito bom',
      picture: '/milkapng.png',
      color: '#704ca4',
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % tabs.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + tabs.length) % tabs.length);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const selectedTab = tabs[selectedIndex];

  return (
    <div className='md:container mx-auto z-10 mt-10'>
      <nav className="rounded-t z-10 dark:bg-stone-900 bg-white px-4">
        <ul className="flex w-full overflow-scroll scrollbar-hide">
          {tabs.map((item, index) => (
            <li
              key={item.title}
              className={`flex-1 flex select-none justify-center items-center gap-4 p-2.5 relative cursor-pointer font-semibold text-lg border ${index === selectedIndex ? 'text-rosa ' : 'text-default-500 hover:text-default-700'}`}
              onClick={() => setSelectedIndex(index)}
            >
              <p className=''>{item.title}</p>
              {index === selectedIndex ? (
                <motion.div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-rosa" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
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
              <h3 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white tracking-wider max-md:mt-4">{selectedTab.title}</h3>
              <p className='w-full max-w-xl text-center md:text-lg font-medium self-center md:mt-4 md:px-4 text-default-700'>{selectedTab.description}</p>
              <div className='flex justify-center my-5'>
                <Button  color='primary' variant='shadow' size='lg'>
                  <ChatBubbleIcon className='w-5 h-5' />
                  Entre em contato
                </Button>
              </div>
            </div>
            <div className='relative'>
              <div className=' rounded-[50%] shadow-sm
               shadow-rosa absolute -bottom-0 left-1/2 -translate-x-1/2 max-lg:w-[300px] max-md:w-[250px] w-[374px] h-[150px] max-sm:w-[200px] max-md:bottom-5 max-sm:h-[100px]' />
              <Image src={selectedTab.picture} alt={selectedTab.title} width={500} height={500} className='object-contain select-none h-[20rem] overflow-hidden' />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
