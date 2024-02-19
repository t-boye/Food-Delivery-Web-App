import React, { useState, useEffect } from 'react';
import './About_Style.css';
import { motion } from 'framer-motion';

function About() {
  const maxCheck = 100000;
  const maxOrders = 1000000;
  const maxProcessed = 8500000;
  const maxServed = 70000;

  const [orders, setOrders] = useState(Math.floor(Math.random() * maxOrders) + 1);
  const [process, setProcessed] = useState(Math.floor(Math.random() * maxCheck) + 1);
  const [served, setServed] = useState(Math.floor(Math.random() * maxServed) + 1);

  const [prevOrders, setPrevOrders] = useState(orders);
  const [prevProcessed, setPrevProcessed] = useState(process);
  const [prevServed, setPrevServed] = useState(served);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOrders((prevOrders) => {
        const increment = Math.random() < 0.8 ? Math.floor(Math.random() * 10) + 1 : -1 * (Math.floor(Math.random() * 10) + 1);
        const newOrders = prevOrders + increment;

        // Increase served by a random value
        setServed((prevServed) => prevServed + Math.floor(Math.random() * 10) + 1);

        // Increase processed by a random value
        setProcessed((prevProcessed) => prevProcessed + Math.floor(Math.random() * 10) + 1);

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
          <h2 className="About-font-head text-8xl pt-8 sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            About My Food App
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-loose">
            My Food App is your one-stop shop for discovering exciting culinary experiences. We connect you with a wide variety of restaurants and cuisines, offering a convenient and delightful way to explore the world of food.
          </p>
        </div>
      </div>

   {/*Mission*/}
   <div className="flex flex-col pt-16 gap-10 max-w-7xl mx-4 mr-8 md:flex-row md:items-left md:justify-between">
  <div className="md:w-1/2 relative">
    <div className="pl-8 md:text-left">
      <h2 className="font-head text-3xl pt-8 sm:text-4xl md:text-5xl font-bold leading-tight text-center md:text-center">
        Mission
      </h2>
      <p className="text-gray-600 text-lg pt-8 text-center md:text-left mb-10 leading-loose">
      Connecting passionate foodies with hidden culinary gems and empowering them to discover a world of flavorful experiences.
      <br />
      We eliminate the "what should I eat?" dilemma by providing a seamless platform for discovering amazing local restaurants and sharing authentic reviews.
      <br />
       We celebrate culinary diversity, support independent restaurants, and promote joyful food adventures, one bite at a time.
      </p>
    </div>
  </div>
  <div className="md:w-1/2">
    <div className="pl-8">
      <img src="https://i.postimg.cc/mD4K8st3/e0a3f89b63c5b082120b9bc70cee629a.jpg" className=" pt-4 pr-8 mb-10 leading-loose">
      </img>
    </div>
  </div>
</div>
  {/*Vision*/}
  <div className="flex flex-col-reverse pt-16 gap-10 max-w-7xl mx-4 mr-8 md:flex-row md:items-center md:justify-between">
  <div className="md:w-1/2 relative">
    <div className="pl-8">
      <img src="https://i.postimg.cc/ncqBVMVt/9f68850c32f2a38104e0b007a26896d1.jpg" className="pt-8 pr-8 mb-10 leading-loose">
      </img>
    </div>
  </div>
  <div className="md:w-1/2">
  <div className="pl-8">
    <h2 className="font-head text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center text-center">
      Vision
    </h2>
    <p className="text-gray-600 text-lg pt-8 text-center md:text-left mb-10 leading-loose">
      We envision a world where every hungry diner has instant access to a wealth of local culinary treasures.
      <br />
      My Food App will be the go-to platform for restaurants to attract new customers and users to explore a diverse range of flavors.
      <br />
      <br />
      We strive to be the leading force in connecting food lovers with the perfect bite, building a vibrant and connected community where everyone can share their passion for food.
    </p>
  </div>
</div>
</div>


      {/* App Performance */}
      <div className="app-performance pt-32">
      <h2 className="font-head text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
    App Performance
  </h2>
      <div className="flex flex-row justify-between my-16 w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
         <div className="order-counts font-head text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">  
          <h2 className="font-head text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
             Orders
          </h2>
          {orders.toLocaleString()}
          </div>
        </motion.div>
        <div className="arrow pt-8  md:mx-4">
            <svg
               className="w-6 h-6 text-gray-400"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
               fill="currentColor"
            >
               <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293z" />
            </svg>
         </div>
        <div className="served font-head text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
          <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
        </motion.div><h2 className="font-head text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
            Processed
          </h2>
        {process.toLocaleString()} 
        </div>
        <div className="arrow pt-8  md:mx-4">
            <svg
               className="w-6 h-6 text-gray-400"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
               fill="currentColor"
            >
               <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293z" />
            </svg>
         </div>
        <div className="served font-head text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
          <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
        </motion.div><h2 className="font-head text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
            Served
          </h2>
        {served.toLocaleString()} 
        </div>
      </div>

</div>

      {/* Call to action */}
      <div className="text-center mt-8">
        <a
          href="/sign-In" // Replace with your desired call to action link
          className="inline-block bg-[#d44646] px-8 py-3 text-white font-bold rounded-md hover:bg-indigo-800"
        >
          Get started
        </a>
      </div>
    </div>
  );
}

export default About;