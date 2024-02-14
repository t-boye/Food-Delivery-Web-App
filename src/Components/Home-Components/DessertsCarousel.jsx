// import React from "react";
// import Burger from "../../assets/Images/slide1.png";

// function Responsive() {
//   const settings = {
//     spaceBetween: 20,
//     slidesPerView: 4, // Adapt as needed
//     slidesPerGroup: 1, // Adjust if more than 1 item per slide
//     pagination: { clickable: true },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     breakpoints: {
//       640: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       480: {
//         slidesPerView: 1,
//         spaceBetween: 10,
//       },
//     },
//   };

// const data = [
//   {
//     name: `Checken Fry`,
//     price: `$ ${14}`,
//     img: Burger,
//   },
//   {
//     name: `Checken Fry`,
//     price: `$ ${14}`,
//     img: Burger,
//   },
//   {
//     name: `Checken Fry`,
//     price: `$ ${14}`,
//     img: Burger,
//   },
//   {
//     name: `Checken Fry`,
//     price: `$ ${14}`,
//     img: Burger,
//   },
//   {
//     name: `Checken Fry`,
//     price: `$ ${14}`,
//     img: Burger,
//   },
//   {
//     name: `Checken Fry`,
//     price: `$ ${14}`,
//     img: Burger,
//   },
//   {
//     name: `Checken Fry`,
//     price: `$ ${14}`,
//     img: Burger,
//   },
//   {
//     name: `Checken Fry`,
//     price: `$ ${14}`,
//     img: Burger,
//   },
//   {
//     name: `Checken Fry`,
//     price: `$ ${14}`,
//     img: Burger,
//   },
//   {
//     name: `Checken Fry`,
//     price: `$ ${14}`,
//     img: Burger,
//   },
//   {
//     name: `Checken Fry`,
//     price: `$ ${14}`,
//     img: Burger,
//   },
//   {
//     name: `Checken Fry`,
//     price: `$ ${14}`,
//     img: Burger,
//   },
// ];  

//   return (
//     <div className="swipe-container mx-[5%] my-12">
//         {data.map((item) => (
//             <div
//               className="card bg-[#3c3a3a] h-[25vh] rounded-lg shadow-md shadow-[white] relative overflow-hidden flex flex-col justify-between text-white"
//             >
//               <div className="image-container px-3">
//                 <img src={item.img} alt={item.name} height={100} width={160} />
//               </div>
//               <div className="content-container px-3 py-2">
//                 <h1 className="dancing-scrip">{item.name}</h1>
//                 <p className="">{item.price}</p>
//               </div>
//               <div className="add-button pb-3 pr-3 bg-green-500 rounded-full h-14 w-14 text-white font-bold cursor-pointer flex items-center justify-center text-2xl">
//                 +
//               </div>
//             </div>
//         ))}
//     </div>
//   );
// }
// export default Responsive;