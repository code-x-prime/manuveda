'use client';

import { useState, useRef } from 'react';
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';



const AudioPlayer = ({ isPlaying, onToggle }: { isPlaying: boolean; onToggle: () => void }) => {
  return (
    <motion.button
      onClick={onToggle}
      className='fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors'
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      <AnimatePresence mode='wait'>
        {isPlaying ? (
          <motion.svg
            key='pause'
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.15 }}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </motion.svg>
        ) : (
          <motion.svg
            key='play'
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.15 }}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

const Page = () => {
  const [entered, setEntered] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleEnter = () => {
    setEntered(true);

    const audio = new Audio(
      'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/daffodils/u_5ggwf3ezta-ayurveda-dream-journey-365535.mp3'
    );
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    audio.play().then(() => {
      setAudioPlaying(true);
    }).catch(() => { });

    window.scrollTo(0, 0);
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setAudioPlaying(!audioPlaying);
    }
  };

  return (
    <div className='min-h-screen bg-white'>
      <AnimatePresence>
        {!entered && (
          <motion.div
            className='fixed inset-0 z-[100] flex items-center justify-center bg-black cursor-pointer overflow-hidden'
            onClick={handleEnter}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <Image
              src='/desktop.png'
              alt='Background'
              fill
              className='object-cover blur-md scale-110'
              priority
            />
            <div className='absolute inset-0 bg-black/60' />

            <motion.div
              className='absolute inset-0'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className='absolute w-2 h-2 bg-emerald-400 rounded-full'
                  style={{
                    left: `${8 + i * 10}%`,
                    top: `${10 + (i % 5) * 18}%`,
                  }}
                  animate={{
                    y: [-40, 40, -40],
                    opacity: [0.3, 0.9, 0.3],
                    scale: [1, 2, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3 + i * 0.4,
                    delay: i * 0.3,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>

            <div className='relative z-10 flex flex-col items-center gap-4 sm:gap-6 px-6'>
              <motion.h1
                className='text-7xl sm:text-8xl md:text-9xl lg:text-[10rem]  text-white tracking-tighter'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
                style={{ textShadow: '0 4px 40px rgba(0,0,0,0.4)' }}
              >
                Manuveda
              </motion.h1>

              <motion.div
                className='w-20 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent'
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
              />

              <motion.p
                className='text-sm sm:text-base md:text-lg text-emerald-300/80 tracking-[0.3em] sm:tracking-[0.4em] uppercase font-light'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
              >
                Ancient Wisdom. Modern Wellness.
              </motion.p>

              <motion.div
                className='mt-8 sm:mt-12'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                  className='flex flex-col items-center gap-3'
                >
                  <span className='text-sm sm:text-base md:text-lg text-white/80 tracking-[0.2em] uppercase font-light'>Click to Enter</span>
                  <motion.svg
                    className='w-5 h-5 sm:w-6 sm:h-6 text-emerald-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 14l-7 7m0 0l-7-7m7 7V3'
                    />
                  </motion.svg>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {entered && (
        <>
          <AudioPlayer isPlaying={audioPlaying} onToggle={toggleAudio} />
          <ScrollExpandMedia
            mediaType='video'
            mediaSrc='https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/daffodils/magnific_create-a-premium-cinemati_UyqWzaiwny.mp4'
            posterSrc='/desktop.png'
            bgImageSrc='/desktop.png'
            title='Manuveda is Coming Soon'
            date='Ancient Wisdom. Modern Wellness.'
            scrollToExpand='Scroll to Explore'
          >
            <div className='max-w-4xl mx-auto'>
              <h2 className='text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-emerald-800'>
                About Manuveda
              </h2>
              <p className='text-base md:text-lg mb-6 md:mb-8 text-gray-700'>
                Manuveda brings you the ancient wisdom of Ayurveda combined with modern wellness practices. We are crafting a unique experience that connects you with nature healing traditions.
              </p>

            </div>
          </ScrollExpandMedia>
        </>
      )}
    </div>
  );
};

export default Page;
