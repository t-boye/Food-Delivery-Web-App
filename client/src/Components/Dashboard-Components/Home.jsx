import React, { useState, useEffect } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";

import { LuCar } from "react-icons/lu";
import { FcProcess } from "react-icons/fc";
import { IoFastFoodOutline } from "react-icons/io5";

import {
  RadarChart,
  Radar,
  PolarGrid,
  PieChart,
  Pie,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function Home() {
  const orderData = [
    // Array of objects for order distribution
    { timeSlot: "Morning", orderCount: 120 },
    { timeSlot: "Afternoon", orderCount: 180 },
    { timeSlot: "Evening", orderCount: 250 },
  ];

  const revenueData = [
    // Array of objects for revenue by cuisine
    { name: "Italian", revenue: 4000 },
    { name: "Indian", revenue: 3500 },
    { name: "Chinese", revenue: 5000 },
  ];

  const customerData = [
    // Array of objects for customer acquisition
    {
      acquisitionChannel: "Organic",
      newCustomers: 100,
      returningCustomers: 50,
    },
    {
      acquisitionChannel: "Referral",
      newCustomers: 80,
      returningCustomers: 70,
    },
    {
      acquisitionChannel: "Paid Ads",
      newCustomers: 120,
      returningCustomers: 30,
    },
  ];

  const deliveryData = [
    // Array of objects for delivery time performance
    { date: "2024-03-06", avgDeliveryTime: 30 },
    { date: "2024-03-07", avgDeliveryTime: 35 },
    { date: "2024-03-08", avgDeliveryTime: 28 },
  ];

  const [topRestaurantsData, setTopRestaurantsData] = useState([]); // State variable for top restaurants data
  const [customerFeedbackData, setCustomerFeedbackData] = useState([]); // State variable for customer feedback data

  // Replace this with your actual logic to fetch data (e.g., using useEffect)
  useEffect(() => {
    // Fetch top restaurants data
    fetch("/api/top-restaurants") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setTopRestaurantsData(data));

    // Fetch customer feedback data
    fetch("/api/customer-feedback") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setCustomerFeedbackData(data));
  }, []);

  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([
    // ... your restaurant data
  ]);

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>33</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>ALERTS</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>ORDERS</h3>
            <IoFastFoodOutline className="card_icon" />
          </div>
          <h1>1200</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>PROCESSED</h3>
            <FcProcess className="card_icon" />
          </div>
          <h1>3000</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>DELIVERED</h3>
            <LuCar className="card_icon" />
          </div>
          <h1>1200</h1>
        </div>
      </div>

      <div className="charts grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {/* Chart 1: Order Distribution by Time Slot (BarChart) */}
        <ResponsiveContainer width="100%" height="300">
          <BarChart
            width={500}
            height={300}
            data={orderData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timeSlot" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="orderCount" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        {/* Chart 2: Revenue by Cuisine (PieChart) */}
        <ResponsiveContainer width="100%" height="300">
          <PieChart
            width={500}
            height={300}
            data={revenueData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <Pie
              dataKey="revenue"
              dataName="Cuisine"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
              label
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        {/* Chart 3: Customer Acquisition by Channel (Stacked BarChart) */}
        <ResponsiveContainer width="100%" height="300">
          <BarChart
            width={500}
            height={300}
            data={customerData}
            stacked
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="acquisitionChannel" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="newCustomers" stackId="a" fill="#8884d8" />
            <Bar dataKey="returningCustomers" stackId="a" fill="#ffc107" />
          </BarChart>
        </ResponsiveContainer>

        {/* Chart 4: Delivery Time Performance (LineChart) */}
        <ResponsiveContainer width="100%" height="300">
          <LineChart
            width={500}
            height={300}
            data={deliveryData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="avgDeliveryTime"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Chart 5: Top Restaurants by Revenue (BarChart) */}
        <ResponsiveContainer width="100%" height="300">
          <BarChart
            width={500}
            height={300}
            data={topRestaurantsData} // Assuming data for top restaurants by revenue
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="restaurantName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        {/* Chart 6: Customer Satisfaction (RadarChart) */}
        <ResponsiveContainer width="100%" height="300">
          <RadarChart
            width={500}
            height={300}
            data={customerFeedbackData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <PolarGrid stroke="#ccc" />
            <XAxis dataKey="criteria" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Radar
              name="Customer Satisfaction"
              dataKey="rating"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
