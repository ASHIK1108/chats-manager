import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import instagram from '../assets/instagram.jpg'
import whatsapp from '../assets/whatsapp.png'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpandedItems, setMobileExpandedItems] = useState({
    product: false,
    solutions: false,
    pricing: false,
    about:false
  });

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Toggle mobile dropdown items
  const toggleMobileItem = (item) => {
    setMobileExpandedItems({
      ...mobileExpandedItems,
      [item]: !mobileExpandedItems[item]
    });
  };

  // Animation variants for dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: { opacity: 1, y: 0, height: 'auto' }
  };

  return (
    <div className=" max-w-full w-full sticky top-0 z-50 bg-white shadow-md">
      {/* Desktop Navigation */}
      <div className="border-b border-gray-200 bg-white ">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-xl font-bold text-black">ChatsManager</span>
            </div>
            
            {/* Desktop Nav Items */}
            <div className="hidden md:flex space-x-12">
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('product')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="font-medium text-gray-900">SERVICES</button>
                <AnimatePresence>
                  {activeDropdown === 'product' && (
                    <motion.div 
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="absolute z-10 top-full -left-14 w-64 mt-6 bg-white shadow-lg rounded-md overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="rounded-md p-2">
                           <img src={instagram} className='w-14 h-14' />
                          </div>
                          <span className="font-medium">Instagram</span>
                        </div>
                        <p className="text-gray-500 text-sm mb-4">Automate your Instagram Marketing</p>
                        
                        <div className="flex items-center space-x-3">
                          <div className=" rounded-md p-2">
                          <img src={whatsapp} className='w-12 h-12' />
                          </div>
                          <span className="font-medium">WhatsApp</span>
                        </div>
                        <p className="text-gray-500 text-sm">Connect with your Customers Instantly</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="font-medium text-gray-900">FEATURES</button>
                <AnimatePresence>
                  {activeDropdown === 'solutions' && (
                    <motion.div 
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="absolute z-10 top-full -left-16 mt-2 bg-white shadow-lg rounded-md overflow-hidden"
                    >
                      <div className="flex  gap-6 p-6 w-max">
                        <div>
                          <h3 className="font-medium text-gray-900 mb-4">BY BUSINESS TYPE</h3>
                          <p className="text-gray-800 py-2">for Creators</p>
                          <p className="text-gray-800 py-2">for Agencies</p>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 mb-4">BY USE CASE</h3>
                          <p className="text-gray-800 py-2">Grow Your Followers</p>
                      
                          <p className="text-gray-800 py-2">Request to Follow </p>
                          <p className="text-gray-800 py-2">Respond To Comments </p>
                          <p className="text-gray-800 py-2">Send Links In DM </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="relative">
                <button className="font-medium text-gray-900">SUBSCRIPTION</button>
              </div>
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="font-medium text-gray-900">@CMANAGER</button>
                <AnimatePresence>
                  {activeDropdown === 'about' && (
                    <motion.div 
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="absolute z-10 top-full left-0 mt-2 bg-white shadow-lg rounded-md overflow-hidden w-max p-5"
                    >
                      
                          <h3 className="font-medium text-gray-900 mb-4">TERMS</h3>
                          <h3 className="font-medium text-gray-900 mb-4">ABOUT</h3>
                        
                          <h3 className="font-medium text-gray-900 mb-4">HELP</h3>
                          <h3 className="font-medium text-gray-900 mb-4">CONTACT</h3>
                          <h3 className="font-medium text-gray-900 mb-4">PRIVACY POLICY</h3>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              {isOpen ? (
                <X className="h-6 w-6 text-gray-900" onClick={toggleMenu} />
              ) : (
                <button onClick={toggleMenu} className="text-gray-900">
                  <div className="space-y-1">
                    <span className="block w-6 h-0.5 bg-gray-900"></span>
                    <span className="block w-6 h-0.5 bg-gray-900"></span>
                    <span className="block w-6 h-0.5 bg-gray-900"></span>
                  </div>
                </button>
              )}
            </div>
            
            {/* Get Started Button */}
            <div className="hidden md:block">
              <button className="bg-purple-700 text-white px-6 py-2 rounded-full font-medium">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white md:hidden"
          >
            <div className="p-4 flex justify-between items-center border-b border-gray-200">
              <span className="text-xl font-bold text-black">ChatsManager</span>
              <X className="h-6 w-6 text-gray-900" onClick={toggleMenu} />
            </div>
            
            <div className="flex justify-center p-4">
              <button className="bg-purple-700   text-white px-6 py-2 rounded-full font-medium">
                GET STARTED
              </button>
            </div>
            
            <div className="py-2">
              {/* Product Section */}
              <div className="border-b border-gray-200">
                <div 
                  className="flex justify-between items-center px-4 py-3 cursor-pointer"
                  onClick={() => toggleMobileItem('product')}
                >
                  <span className="font-medium text-gray-900">SERVICES</span>
                  {mobileExpandedItems.product ? 
                    <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  }
                </div>
                
                <AnimatePresence>
                  {mobileExpandedItems.product && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 py-2 space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className=" rounded-md p-2">
                          <img src={instagram} className='w-14 h-14' />
                          </div>
                          <span>Instagram</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <div className=" rounded-md p-2">
                          <img src={whatsapp} className='w-12 h-12' />
                          </div>
                          <span>WhatsApp</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Solutions Section */}
              <div className="border-b border-gray-200">
                <div 
                  className="flex justify-between items-center px-4 py-3 cursor-pointer"
                  onClick={() => toggleMobileItem('solutions')}
                >
                  <span className="font-medium text-gray-900">FEATURES</span>
                  {mobileExpandedItems.solutions ? 
                    <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  }
                </div>
                
                <AnimatePresence>
                  {mobileExpandedItems.solutions && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 py-2 space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-1">BY BUSINESS TYPE</h4>
                          <p>For Agencies</p>
                          <p>For Creators</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-1">BY USE CASE</h4>
                          <p>Grow Your Follower</p>
                          <p>Request to Follow </p>
                          <p>Respond To Comments </p>
                          <p>Send Links In DM </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              
              
              {/* Pricing Section */}
              <div className="border-b border-gray-200">
                <div 
                  className="flex justify-between items-center px-4 py-3 cursor-pointer"
                  
                >
                  <span className="font-medium text-gray-900">SUBSCRIPTION</span>
                  {/* {mobileExpandedItems.pricing ? 
                    <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  } */}
                </div>
              </div>
              <div className="border-b border-gray-200">
                <div 
                  className="flex justify-between items-center px-4 py-3 cursor-pointer"
                  onClick={() => toggleMobileItem('about')}
                >
                  <span className="font-medium text-gray-900">@CMANAGER</span>
                  {mobileExpandedItems.about ? 
                    <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  }
                </div>
                
                <AnimatePresence>
                  {mobileExpandedItems.about && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 py-2 space-y-4">
                      <h3 className="font-light text-gray-900 mb-4">TERMS</h3>
                          <h3 className="font-light text-gray-900 mb-4">ABOUT</h3>
                        
                          <h3 className="font-light text-gray-900 mb-4">HELP</h3>
                          <h3 className="font-light text-gray-900 mb-4">CONTACT</h3>
                          <h3 className="font-light text-gray-900 mb-4">PRIVACY POLICY</h3>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar