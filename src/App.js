import logo from './logo.svg';
import './App.css';
import './App.css';
import Role from "./Role/Role";
import Register2 from "./Register/Register2";
import Ushtrime from "./ushtrime";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
   
    
    
    <Router>
        <Routes>
        {/* <Route path='/' component={Home} exact/>
     <Route path='/Login' component={Login} exact/> */}
 
     {/* <Route path="/Register" element={<Register />} /> */}
     <Route path="/Register2" element={<Register2/>} />
     <Route path="/Role" element={<Role />} />
     <Route path="/Ushtrime" element={<Ushtrime />} />
    </Routes>
      </Router>


   
</>
  );
}

export default App;
