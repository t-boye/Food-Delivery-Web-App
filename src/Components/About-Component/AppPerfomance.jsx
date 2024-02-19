import React from "react";
import { motion } from "framer-motion";

const AppPerfomance = () => {
  const maxOrders = 1400000;
  const maxProcessed = 1200000;
  const maxServed = 800500;
  const maxCheckPoint = 10000;

  const [orders, setOrders] = useState(
    Math.floor(Math.random() * maxOrders) + 1
  );
  const [served, setServed] = useState(
    Math.floor(Math.random() * maxServed) + 1
  );
  const [processed, setProcessed] = useState(
    Math.min(orders - served, Math.floor(Math.random() * (maxOrders - orders)))
  );
  const [prevOrders, setPrevOrders] = useState(orders);
  const [prevServed, setPrevServed] = useState(served);
  const [prevProcessed, setPrevProcessed] = useState(processed);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOrders((prevOrders) => {
        const increment =
          Math.random() < 0.8
            ? Math.floor(Math.random() * 10) + 1
            : -1 * (Math.floor(Math.random() * 10) + 1);
        const newOrders = prevOrders + increment;

        // Increase served by a random value
        setServed(
          (prevServed) => prevServed + Math.floor(Math.random() * 12) + 1000
        );

        // Update processed based on new orders
        const newProcessed = Math.max(
          newOrders - maxCheckPoint,
          Math.floor(Math.random() * (maxCheckPoint * 5))
        );
        setProcessed(newProcessed);

        return newOrders;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* App Performance */}
      <div className="app-performance">
        <h2 className="font-head text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
          App Performance
        </h2>
        <div className="flex flex-row justify-between my-16 w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
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
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293z"
              />
            </svg>
          </div>
          <div className="served font-head text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <h2 className="font-head text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-center ">
              Processed
            </h2>
            {processed.toLocaleString()}
          </div>
          <div className="arrow pt-8  md:mx-4">
            <svg
              className="w-6 h-6 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293z"
              />
            </svg>
          </div>
          <div className="served font-head text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <h2 className="font-head text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
              Served
            </h2>
            {served.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center mt-10">
        <a
          href="/sign-In" // Replace with your desired call to action link
          className="inline-block bg-[#d44646] px-8 py-3 text-white font-bold rounded-md hover:bg-indigo-800"
        >
          Start exploring your taste buds today!
        </a>
      </div>
    </div>
  );
};

export default AppPerfomance;