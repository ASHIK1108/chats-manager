import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const InstagramDMHero = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    });
  }, [controls]);

  // Phone notification animation sequence
  const notificationControls = useAnimation();
  
  useEffect(() => {
    const animateNotifications = async () => {
      await notificationControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 1.2 }
      });
      
      // Animate the chat bubbles in sequence
      await notificationControls.start("chatBubble1");
      await notificationControls.start("chatBubble2");
      await notificationControls.start("chatBubble3");
    };
    
    animateNotifications();
  }, [notificationControls]);

  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* Background pattern design */}
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <div className="absolute right-0 top-0 w-full h-full">
          <div className="grid grid-cols-4 grid-rows-4 gap-2 h-full w-full opacity-70">
            {[...Array(16)].map((_, index) => (
              <div 
                key={index} 
                className={`rounded-md ${
                  index % 3 === 0 ? 'bg-purple-700' : 
                  index % 3 === 1 ? 'bg-purple-500' : 'bg-purple-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left content - Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            className="z-10"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
            >
              Discover the<br />
              real power of<br />
              Instagram DMs
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl max-w-lg mb-8"
            >
              Attract quality leads, drive more sales, and reply
              to conversations 24/7 with
              Instagram DM Marketing
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                GET STARTED
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right content - Phone mockup */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative hidden md:block"
          >
            {/* Person image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute right-0 top-0 z-10"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-purple-500 overflow-hidden relative">
                <div className="absolute bottom-0 w-full h-2/3 bg-black"></div>
              </div>
            </motion.div>
            
            {/* Phone mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ 
                duration: 1,
                delay: 0.9,
                type: "spring",
                stiffness: 100
              }}
              className="relative z-20 mx-auto"
            >
              <div className="bg-black rounded-3xl p-3 w-64 md:w-72 shadow-xl">
                <div className="relative bg-black rounded-2xl overflow-hidden h-full">
                  {/* Phone status bar */}
                  <div className="bg-black text-white text-xs p-2 flex justify-between items-center">
                    <span>14:57</span>
                    <div className="w-16 h-4 bg-black rounded-full"></div>
                  </div>
                  
                  {/* Instagram DM interface */}
                  <div className="bg-black text-white">
                    {/* Instagram header */}
                    <div className="flex items-center p-2 border-b border-gray-800">
                      <motion.div whileHover={{ x: -3 }} className="mr-2">
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gray-600 rounded-full mr-2"></div>
                        <span className="text-sm">nikefootball</span>
                      </div>
                      <div className="ml-auto flex space-x-4">
                        <div className="w-5 h-5 border border-white rounded"></div>
                        <div className="w-5 h-5 border border-white rounded"></div>
                      </div>
                    </div>
                    
                    {/* Chat area */}
                    <div className="p-3 h-96 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
                      <div className="text-xs text-gray-500 text-center mb-4">BON JOUERIE</div>
                      
                      {/* Challenge message */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        variants={{
                          chatBubble1: { opacity: 1, y: 0, transition: { delay: 0.3 } }
                        }}
                        animate={notificationControls}
                        className="bg-gray-800 p-2 rounded-lg mb-4 max-w-xs mx-auto"
                      >
                        <div className="text-xs">Here is your first challenge: HUNGRY LAUNDRY! 🔥🍕🧺</div>
                        <div className="mt-2">
                          <div className="bg-gray-700 h-32 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                              <div className="uppercase font-bold">HUNGRY LAUNDRY CHALLENGE!</div>
                              <div className="mt-6 bg-gray-800 text-xs py-1 px-3 rounded-full inline-block">
                                Tap to watch!
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Reply messages */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        variants={{
                          chatBubble2: { opacity: 1, transition: { delay: 0.6 } }
                        }}
                        animate={notificationControls}
                        className="flex items-center mb-3"
                      >
                        <div className="w-6 h-6 bg-gray-600 rounded-full mr-2"></div>
                        <div className="bg-gray-800 py-1 px-3 rounded-full text-xs">
                          You done???
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        variants={{
                          chatBubble3: { opacity: 1, transition: { delay: 0.9 } }
                        }}
                        animate={notificationControls}
                        className="flex justify-end mb-3"
                      >
                        <div className="bg-blue-600 py-1 px-3 rounded-full text-xs flex items-center">
                          <span>You bet!</span>
                          <span className="ml-1 text-xs">✓</span>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        variants={{
                          chatBubble3: { opacity: 1, transition: { delay: 1.2 } }
                        }}
                        animate={notificationControls}
                        className="flex items-center mb-3"
                      >
                        <div className="w-6 h-6 bg-gray-600 rounded-full mr-2"></div>
                        <div className="bg-gray-800 py-1 px-3 rounded-lg text-xs">
                          Great! Let's proceed with<br />
                          the next one then!
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Input area */}
                    <div className="p-2 border-t border-gray-800 flex items-center">
                      <div className="w-6 h-6 bg-blue-600 rounded-full mr-2"></div>
                      <div className="text-xs text-gray-400">Message...</div>
                      <div className="ml-auto flex space-x-3">
                        <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
                        <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
                        <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-gray-500" />
      </motion.div>
    </div>
  );
};

export default InstagramDMHero;