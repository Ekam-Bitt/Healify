// // // import { cleanup } from '@testing-library/react';
// // // import React, { useEffect } from 'react';

// // // export default function GenericMedicine() {
// // //   let API = "http://localhost:3065/";

// // //   const fetchApiData = async (url) => {
// // //     try {
// // //       const res = await fetch(url); // Await the fetch call
// // //       // Process the response as needed
// // //     } catch (error) {
// // //       console.log(error);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchApiData(API);
// // //   }, []);

// // //   return (
// // //     <div>GenericMedicine</div>
// // //   );
// // // }

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const MyComponent = () => {
// //   const [medicines, setMedicines] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState('');

// //   useEffect(() => {
// //     fetchMedicines();
// //   }, []);

// //   const fetchMedicines = async () => {
// //     try {
// //       const response = await axios.get('/');
// //       setMedicines(response.data.medicines);
// //     } catch (error) {
// //       console.error('Error fetching medicines', error);
// //     }
// //   };

// //   const handleSearchChange = (e) => {
// //     setSearchTerm(e.target.value);
// //   };

// //   const handleSearchSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('/api/search', { searchTerm });
// //       setMedicines(response.data.medicines);
// //     } catch (error) {
// //       console.error('Error searching medicines', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Medicines</h1>
// //       <form onSubmit={handleSearchSubmit}>
// //         <input
// //           type="text"
// //           value={searchTerm}
// //           onChange={handleSearchChange}
// //           placeholder="Search for a medicine"
// //         />
// //         <button type="submit">Search</button>
// //       </form>
// //       <ul>
// //         {medicines.map((medicine) => (
// //           <li key={medicine._id}>
// //             <h2>{medicine.name}</h2>
// //             <p>Generic Name: {medicine.genericName}</p>
// //             <p>Distributors: {medicine.distributors.join(', ')}</p>
// //             <p>Price Difference: {medicine.priceDifference}</p>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default MyComponent;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const MyComponent = () => {
//   const [medicines, setMedicines] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchMedicines = async (param) => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3065/medicines/${param}`
//         );
//         setMedicines(response.data.medicines);
//       } catch (error) {
//         console.error("Error fetching medicines", error);
//       }
//     };
//     fetchMedicines();
//   }, []);

//   const handleSearchChange = (e) => {
//     axios
//       .post("http://localhost:3065/search/", {
//         searchTerm: e.target.value,
//       })
//       .then((data) => {
//         const jsonData = data.data();
//         setSearchTerm(jsonData);
//       });
//   };

//   const handleSearchSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3065/search", {
//         searchTerm,
//       });
//       setMedicines(response.data.medicines);
//     } catch (error) {
//       console.error("Error searching medicines", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Medicines</h1>
//       <form onSubmit={handleSearchSubmit}>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleSearchChange}
//           placeholder="Search for a medicine"
//         />
//         <button type="submit">Search</button>
//       </form>
//       <ul>
//         {medicines && medicines.length > 0 ? (
//           medicines.map((medicine) => (
//             <li key={medicine._id}>
//               <h2>{medicine.name}</h2>
//               <p>Generic Name: {medicine.genericName}</p>
//               <p>Distributors: {medicine.distributors.join(", ")}</p>
//               <p>Price Difference: {medicine.priceDifference}</p>
//             </li>
//           ))
//         ) : (
//           <li>No medicines found.</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default MyComponent;
