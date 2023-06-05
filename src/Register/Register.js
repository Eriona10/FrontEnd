
// import { React, useEffect, useState } from 'react';
// import axios from 'axios';



// export default function Register() {
//   const [register, setregister] = useState([]);
//   // const [role, setrole] = useState([]);
//   const [firstName, setfirstName] = useState('');
//   const [lastName, setlasName] = useState('');
//   const [email, setemail] = useState('');
//   const [password, setpassword] = useState('');
//   const [confirmPassword, setconfirmPassword] = useState('');
//   const [roleId, setroleId] = useState('');
//   const [refreshkey, setrefreshkey] = useState('0');
//   const cors=require('cors');

//   useEffect(() => {
//     axios.get('https://localhost:7291/api/User/register')
//       .then(response => {
//         console.log(response);
//         setregister(response.data);
//       })
//   }, [refreshkey])
  
//   // useEffect(() => {
//   //   axios.get('https://localhost:7291/api/Role')
//   //     .then(response => {
//   //       console.log(response);
//   //       setrole(response.data);
//   //     })
//   //       }, [refreshkey])
      
      
//   const handleAdd = (e) => {
//     e.preventDefault();
//     const registeradd = { firstName, lastName, email, password, confirmPassword, roleId};

//     axios.post('https://localhost:7291/api/User/register', registeradd)
//       .then(() => {
//         window.confirm('U registruar me sukses')
//       })
//       .then(() => {
//         setrefreshkey(refreshkey => refreshkey + 1)
//       })
//   }
//   return (
//        <>


//       <head> 
     
//      </head>
//       <body class="account-body accountbg">

//         <div class="container">
         
//                       <div className="text-center p-3"> 
//                         {/* <a href="index.html" class="logo logo-admin">
//    <img src="~/images/petlogo.png" height="100" alt="logo" class="auth-logo">
//     </a> */}

//                         <h4 class="mt-3 mb-1 fw-semibold text-white font-18">Paw Tracker</h4>
//                         <p class="text-muted  mb-0">Sign in to continue.</p>
//                       </div>
//                     </div>
//                     <div class="card-body p-0"> 

//                       {/* <ul class="nav-border nav nav-pills" role="tablist">
//                                     <li class="nav-item">
//                                         <form class="form-inline" asp-area="Identity" asp-page="/Account/Login"  method="get">
//                                             <button type="submit" class="nav-link fw-semibold"><i data-feather="power" class="align-self-center icon-xs icon-dual me-1"></i>Login</button>
//                                         </form>
//                                     </li>
//                                     <li class="nav-item">
//                                         <form class="form-inline" asp-area="Identity" asp-page="/Account/Register" method="post">
//                                             <button type="submit" class="nav-link fw-semibold active"><i data-feather="power" class="align-self-center icon-xs icon-dual me-1"></i>Register</button>
//                                         </form>
//                                     </li>
//                                 </ul> */}

//                       <div class="tab-content">
//                         <div class="tab-pane px-3 pt-3 active" id="Register_Tab" role="tabpanel">
//                           <form id="registerForm" onSubmit={handleAdd} method="post">
//                             <h2>Create a new account.</h2>
//                             <hr />

//                             <div asp-validation-summary="ModelOnly" class="text-danger"></div>
//                             <div class="form-group mb-2">
//                               <label>Firstname</label>
//                               <input
//                                 required
//                                 id="filled-required"
//                                 type="text"
//                                 class="form-control"
//                                 placeholder='Firstname'
//                                 aria-required="true"
//                                 variant="standard"
//                                 value={firstName}
//                                 onChange={(e) => setfirstName(e.target.value)}
//                               />
//                             </div>
//                             <div class="form-group mb-2">
//                             <label>LastName</label>
//                               <input
//                                 required
//                                 id="filled-required"
//                                 type="text"
//                                 class="form-control"
//                                 placeholder='LastName'
//                                 aria-required="true"
//                                 variant="standard"
//                                 value={lastName}
//                                 onChange={(e) => setlasName(e.target.value)}
//                               />
//                             </div>
//                             <div class="form-group mb-2">
//                             <label>Email</label>
//                               <input
//                                 required
//                                 id="filled-required"
//                                 type="email"
//                                 class="form-control"
//                                 placeholder='Email'
//                                 aria-required="true"
//                                 variant="standard"
//                                 value={email}
//                                 onChange={(e) => setemail(e.target.value)}
//                               />
//                               <span class="text-danger"></span>
//                             </div>
//                             <div class="form-group mb-2">
//                             <label>Password</label>
//                               <input
//                                 required
//                                 id="filled-required"
//                                 type="password"
//                                 class="form-control"
//                                 placeholder='Password'
//                                 aria-required="true"
//                                 variant="standard"
//                                 value={password}
//                                 onChange={(e) => setpassword(e.target.value)}
//                               />
//                               <span class="text-danger"></span>
//                             </div>
//                             <div class="form-group mb-2">
//                             <label>Confirm Password</label>
//                               <input
//                                 required
//                                 id="filled-required"
//                                 type="password"
//                                 class="form-control"
//                                 placeholder='ConfirmaPassword'
//                                 aria-required="true"
//                                 variant="standard"
//                                 value={confirmPassword}
//                                 onChange={(e) => setconfirmPassword(e.target.value)}
//                               />
//                               <span  class="text-danger"></span>
//                             </div>
//                             <div class="form-group mb-2">

//                               {/* <select class="form-control" aria-required="true" value={role} >

//                                 <option disabled selected> Select Role</option>
//                                 {role.map((Role) => (
//                                 <option key={Role.roleid} value={Role.roleid}>
//                                  {Role.name}
//                                  </option>
//                                    ))}
                                   
//                               </select>  */}
//                                <input
//                                 required
//                                 id="filled-required"
//                                 type="text"
//                                 class="form-control"
//                                 placeholder='Role'
//                                 aria-required="true"
//                                 variant="standard"
//                                 value={roleId}
//                                 onChange={(e) => setroleId(e.target.value)}
//                               />
//                               <span class="text-danger"></span>
//                             </div>


//                             <button id="registerSubmit" type="submit" class="w-100 btn btn-lg btn-primary">Register</button>
//                           </form>
//                           <p class="my-3 text-muted">Already have an account ?<a href="" class="text-primary ms-2">Log in</a></p>
//                         </div>
//                       </div>
//                     </div>

                 
//             </body> 
//           </>
//           )
// }