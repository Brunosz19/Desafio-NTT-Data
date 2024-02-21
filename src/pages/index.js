import React from 'react';
import { getServerSideProps } from './services/api-fetch';

export default function Home({ data }) {
  return (
    <>
      <h1>Nuevo Reto Bootcamp</h1>
      <table>
        <thead>
          <tr>
            <th>Género</th>
            <th>Nombre</th>
            <th>Ubicación</th>
            <th>Correo</th>
            <th>Nacimiento</th>
            <th>Foto</th>
          </tr>
        </thead>
        <tbody>
          {data.results.map((item, index) => (
            <tr key={index}>
              <td>{item.gender.slice(0, 1).toUpperCase() + item.gender.slice(1)}</td>
              <td>{`${item.name.title} ${item.name.first} ${item.name.last}`}</td>
              <td>{`${item.location.city} - ${item.location.state}, ${item.location.country}`}</td>
              <td>{item.email}</td>
              <td>{`${item.dob.date.slice(0, 10)}`}</td>
              <td>
                <img src={item.picture.medium} alt="Avatar" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export { getServerSideProps };
