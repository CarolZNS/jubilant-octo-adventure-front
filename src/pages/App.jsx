import "../App.css";
import React, { useState, useEffect } from "react";
import {api} from "../api";

function App() {
  const [users, setUsers] = useState([]);
 
  useEffect(()=>{
    api.get('/').then((response) => setUsers(response.data));
  },[])
    
  return (
    <section className="section">
      <div className="container">
        <div className="box">

          {/* Barra do titulo */}
          <nav className="navbar is-primary" role="navigation">
            <div className="navbar-menu">
              <div className="navbar-start">
                <p className="navbar-item">
                  <strong>Users</strong>
                </p>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <button className="button is-link">
                    <strong>Add User</strong>
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Tabela */}
          <div>
            <table className="table is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Position</th>
                  <th width="200px">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user,index)=>{
                  return(
                    <tr>
                    <th scope="row">{index+1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.position}</td>
                    <td className="field is-grouped">
                      <button className="button is-link mx-2">Details</button>
                      <button className="button is-success mr-2">Edit</button>
                      <button
                        className="button is-danger"
                        onClick={() =>
                          alert("Are you sure want to delete this record?")
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr> 
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
