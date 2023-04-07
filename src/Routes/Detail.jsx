import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentist, setDentist] = useState({})
  const params = useParams();
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const getDentistDetail = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await res.json();
    setDentist(data)
  };

  useEffect(() => {
    getDentistDetail();
  })

  return (
    <div>
      <h1>Detail Dentist {dentist.id} </h1>
      <div className='container'>
      <img className='doctor' src="../images/doctor.jpg" alt="doctor" width="100x" height="100px" />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{dentist.name}</td>
                <td>{dentist.email}</td>
                <td>{dentist.phone}</td>
                <td>{dentist.website}</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Detail