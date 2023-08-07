// import Header from "./Components/Header";
// import HomePage from "./Components/HomePage";
// import LoginPage from "./Components/LoginPage";
// import SignUpPage from "./Components/SignUpPage";
import ASN from "./Pages/ASN";
import React from "react";
function App() {
  return (
    <div className="container">
      {/* <Header /> */}
      <ASN />
      {/* <SignUpPage /> */}
      {/* <HomePage /> */}
      {/* <LoginPage /> */}
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     // Fetch data from a public API using Axios
//     axios
//       .POST("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         setData(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError("Error fetching data from the API");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>Public API Data</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
