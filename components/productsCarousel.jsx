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
    <div className=' w-full h-screen z-10  mt-10'>
      <nav className="rounded-t sticky top-0 z-10 dark:bg-stone-900 bg-white px-4">
        <ul className="flex w-full">
          {tabs.map((item, index) => (
            <li
              key={item.title}
              className={`flex-1 flex select-none justify-center items-center gap-4 p-2.5 relative cursor-pointer font-semibold text-lg border ${index === selectedIndex ? 'text-white ' : 'text-default-500'}`}
              onClick={() => setSelectedIndex(index)}
            >
              <p className='max-md:hidden'>{item.title}</p>
              {index === selectedIndex ? (
                <motion.div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-white" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-full h-full rounded-lg overflow-hidden relative p-4 ">
        <Button isIconOnly size="lg" onPress={handlePrev} className="hidden md:flex items-center gap-3 absolute left-5 top-1/2 -translate-y-1/2 z-20"><ArrowLeftIcon className='w-8 h-8' /></Button>
        <Button isIconOnly size="lg" onPress={handleNext} className="hidden md:flex item-center gap-3 absolute right-5 top-1/2 -translate-y-1/2 z-20"> <ArrowRightIcon className='w-8 h-8' /></Button>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              backgroundColor: selectedTab.color,
            }}
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
            className='flex max-md:flex-col-reverse h-full w-full justify-around items-center rounded-lg'
          >
            <div className='flex flex-col gap-6 '>
              <h3 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white tracking-wider">{selectedTab.title}</h3>
              <p className='w-full max-w-xl text-center md:text-lg font-medium self-center mt-7 px-4 text-default-700'>{selectedTab.description}</p>
              <div className='flex justify-center '>
                <Button variant='shadow' size='lg'>
                  <ChatBubbleIcon className='w-5 h-5' />
                  Entre em contato
                </Button>
              </div>
            </div>
            <Image src={selectedTab.picture} alt={selectedTab.title} width={500} height={500} className='object-contain select-none' />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
