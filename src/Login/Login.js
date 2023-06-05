import { React, useEffect, useState ,Redirect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


export default function Login() {
const [login, setlogin] = useState([]);
const [email, setemail] = useState('');
const [password, setpassword] = useState('');
const navigate = useNavigate();
const token = 'your-authentication-token'; 
const [refreshkey, setrefreshkey] = useState('0');
// useEffect(() => {
//     axios.get('https://localhost:7291/api/User')
//       .then(response => {
//         console.log(response);
//         setlogin(response.data);
//       })
//   }, [refreshkey])

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "https://localhost:7291/api/User/login",
//         {
//           email: email,
//           password: password,
//         }
//       );
//       console.log(response.data); // Të përpunoni përgjigjen e API-së sipas nevojës tuaj
//     } catch (error) {
//       console.error(error);
//     }
//   };
const handleLogin = () => {
    const token = 'your-authentication-token'; // Replace with your actual authentication token
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  
    axios
      .post('https://localhost:7291/api/User/login', { email, password }, { headers })
      .then((response) => {
        console.log(response.data);
        navigate('/App');
        // Handle the successful response
      })
      .catch((error) => {
        console.log(error.response.data);
        // Handle the error response
      });
  };
  return (
    <>
     <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
     </>
    )
}