
import { React, useEffect, useState } from 'react';
import axios from 'axios';



export default function Role() {
    const [role, setrole] = useState([]);
    const [id, setid] = useState('');
    const [name, setname] = useState('');
    const [normalizedName, setnormalizedName] = useState('');
    const [concurrencyStamp, setconcurrencyStamp] = useState('');
    const [refreshkey, setrefreshkey] = useState('0');
useEffect(() => {
axios.get('https://localhost:7291/api/Role')
   .then(response => {
   console.log(response);
   setrole(response.data);
})

   }, [refreshkey])

   const handleAdd = (e) => {
    e.preventDefault();
    const role = { id, name, normalizedName, concurrencyStamp};

    axios.post('https://localhost:7291/api/Role/add-Role', role)
      .then(() => {
        window.confirm('U registruar me sukses')
      })
      .then(() => {
        setrefreshkey(refreshkey => refreshkey + 1)
      })
  }
    return (
        <>
        <head> 
       
     </head>
     <body className="account-body accountbg">


                  <form id="registerForm" onSubmit={handleAdd} method="post">
                    <h2>Create a new account.</h2>
                    <hr />

                    <div asp-validation-summary="ModelOnly" className="text-danger"></div>
                    <div className="form-group mb-2">
                      <label>Id</label>
                      <input
                        required
                        id="filled-required"
                        type="text"
                        className="form-control"
                        placeholder='Id'
                        aria-required="true"
                        variant="standard"
                        value={id}
                        onChange={(e) => setid(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-2">
                      <label>Name</label>
                      <input
                        required
                        id="filled-required"
                        type="text"
                        className="form-control"
                        placeholder='Name'
                        aria-required="true"
                        variant="standard"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-2">
                    <label>NormalizedName</label>
                      <input
                        required
                        id="filled-required"
                        type="text"
                        className="form-control"
                        placeholder='NormalizedName'
                        aria-required="true"
                        variant="standard"
                        value={normalizedName}
                        onChange={(e) => setnormalizedName(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-2">
                    <label>ConcurrencyStamp</label>
                      <input
                        required
                        id="filled-required"
                        type="text"
                        className="form-control"
                        placeholder='ConcurrencyStamp'
                        aria-required="true"
                        variant="standard"
                        value={concurrencyStamp}
                        onChange={(e) => setconcurrencyStamp(e.target.value)}
                      />
                      <span className="text-danger"></span>
                    </div>
                    <button id="rolesubmit" type="submit" className="w-100 btn btn-lg btn-primary">Register</button>
                    </form>
           
        </body>
        </>
    )
}