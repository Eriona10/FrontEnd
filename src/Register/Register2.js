
import { React, useEffect, useState } from 'react';
import axios from 'axios';



export default function Register2() {
    const [register, setregister] = useState([]);
const [id, setid] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlasName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [roleId, setroleId] = useState('');
  const [refreshkey, setrefreshkey] = useState('0');

  useEffect(() => {
    axios.get('https://localhost:7291/api/User')
      .then(response => {
        console.log(response);
        setregister(response.data);
      })
  }, [refreshkey])


  const handleAdd = (e) => {
    e.preventDefault();
    const userId = uuidv4()
    const registeradd = {userId,firstName, lastName, email, password, confirmPassword, roleId};

    axios.post('https://localhost:7291/api/User/register', registeradd)
      .then(() => {
        window.confirm('U registruar me sukses')
      })
      .then(() => {
        setrefreshkey(refreshkey => refreshkey + 1)
      })
  }
    return (
        <>
        
     <body className="account-body accountbg">


     <form id="registerForm" onSubmit={handleAdd} method="post">
                            <h2>Create a new account.</h2>
                            <hr />

                            <div asp-validation-summary="ModelOnly" className="text-danger"></div>
                            
                            <div className="form-group mb-2">
                              
                              <label>Firstname</label>
                              <input
                                required
                                id="filled-required"
                                type="text"
                                className="form-control"
                                placeholder='Firstname'
                                aria-required="true"
                                variant="standard"
                                value={firstName}
                                onChange={(e) => setfirstName(e.target.value)}
                              />
                            </div>
                            <div className="form-group mb-2">
                            <label>LastName</label>
                              <input
                                required
                                id="filled-required"
                                type="text"
                                className="form-control"
                                placeholder='LastName'
                                aria-required="true"
                                variant="standard"
                                value={lastName}
                                onChange={(e) => setlasName(e.target.value)}
                              />
                            </div>
                            <div className="form-group mb-2">
                            <label>Email</label>
                              <input
                                required
                                id="filled-required"
                                type="email"
                                className="form-control"
                                placeholder='Email'
                                aria-required="true"
                                variant="standard"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                              />
                              <span className="text-danger"></span>
                            </div>
                            <div className="form-group mb-2">
                            <label>Password</label>
                              <input
                                required
                                id="filled-required"
                                type="password"
                                className="form-control"
                                placeholder='Password'
                                aria-required="true"
                                variant="standard"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                              />
                              <span className="text-danger"></span>
                            </div>
                            <div className="form-group mb-2">
                            <label>Confirm Password</label>
                              <input
                                required
                                id="filled-required"
                                type="password"
                                className="form-control"
                                placeholder='ConfirmaPassword'
                                aria-required="true"
                                variant="standard"
                                value={confirmPassword}
                                onChange={(e) => setconfirmPassword(e.target.value)}
                              />
                              <span  className="text-danger"></span>
                            </div>
                            <div className="form-group mb-2">

                               <input
                                required
                                id="filled-required"
                                type="text"
                                className="form-control"
                                placeholder='Role'
                                aria-required="true"
                                variant="standard"
                                value={roleId}
                                onChange={(e) => setroleId(e.target.value)}
                              />
                              <span className="text-danger"></span>
                            </div>


                            <button id="registerSubmit" type="submit" className="w-100 btn btn-lg btn-primary">Register</button>
                          </form>
        </body>
        </>
    )
}