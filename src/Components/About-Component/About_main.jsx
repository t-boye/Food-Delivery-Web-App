import React, { useState, useEffect } from 'react';
import './About_Style.css';
import { motion } from 'framer-motion';

function About() {
   const maxOrders = 1000000;
   const maxServed = 7000;
   
   const [orders, setOrders] = useState(Math.floor(Math.random() * maxOrders) + 1);
   const [served, setServed] = useState(Math.floor(Math.random() * maxServed) + 1);
   const [prevOrders, setPrevOrders] = useState(orders);
   const [prevServed, setPrevServed] = useState(served);

  useEffect(() => {
   const intervalId = setInterval(() => {
     setOrders(prevOrders => {
       const increment = Math.random() < 0.8 ? Math.floor(Math.random() * 10) + 1 : -1 * (Math.floor(Math.random() * 10) + 1);
       const newOrders = prevOrders + increment;
 
       // Increase served by a random value
       setServed(prevServed => prevServed + Math.floor(Math.random() * 10) + 1);
 
       return newOrders;
     });
   }, 1000);
 
   return () => clearInterval(intervalId);
 }, []);

  return (
    <div className="relative flex flex-col items-center justify-center bg-gray-100 pt-24 pb-24">
      {/* Introduction */}
      <div className="flex flex-wrap md:flex-row gap-10 overflow-hidden max-w-7xl mx-auto rounded-xl pb-10 shadow-md md:shadow-8xl justify-center">
        <div className="md:text-center w-full md:w-1/2 px-8">
          <h3 className="font-head text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            About My Food App
          </h3>
          <p className="text-gray-600 text-lg mb-8 leading-loose">
            My Food App is your one-stop shop for discovering exciting culinary experiences. We connect you with a wide variety of restaurants and cuisines, offering a convenient and delightful way to explore the world of food.
          </p>
        </div>
      </div>

      {/* Story and "Need for My Food App" */}
      <div className="flex flex-col pt-16 items-center gap-10 mb-20 max-w-7xl mx-auto">
        <h2 className="font-head text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
          Need for My Food App
        </h2>
        <p className="text-gray-600 text-lg text-center mb-10 leading-loose">
          In today's fast-paced world, finding the time and energy to research and discover new restaurants can be challenging. My Food App makes it easy. With our curated selection of restaurants, intuitive search filters, and personalized recommendations, you can effortlessly find the perfect meal for any occasion.
        </p>
        <img
          src="/food-image.jpg" // Replace with your actual image source
          alt="Delicious food"
          className="object-cover h-64 w-96 rounded-xl mx-auto"
        />
      </div>

      {/* New section for numbers */}
      <div className="flex flex-row justify-between my-20 w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
         <div className="order-counts font-head text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">  
          <h2 className="font-head text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
             Orders
          </h2>
          {orders.toLocaleString()}</div>
        </motion.div>
        <div className="served font-head text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
          <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
        </motion.div><h2 className="font-head text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
            Served
          </h2>
        {served.toLocaleString()} 
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center mt-10">
        <a
          href="/" // Replace with your desired call to action link
          className="inline-block bg-indigo-600 px-8 py-3 text-white font-bold rounded-md hover:bg-indigo-800"
        >
          Start exploring your taste buds today!
        </a>
      </div>
    </div>
  );
}

export default About;