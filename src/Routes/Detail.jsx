import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCharStates } from '../Context';

const Detail = () => {
  const {state} = useCharStates();
  const { id }= useParams();
  const [dentist, setDentist] = useState({});

  const tableStyle = {
    backgroundColor: '#ffff',
    color: state.theme ? '#000' : '#6d5c5c',
    width: '80%',
    margin: '20px auto',
    borderCollapse: 'collapse',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #ddd'
  };
  
  const sectionTitleStyle = {
    backgroundColor: state.theme ? '#9ad998' : '#1a1a1a',
    fontWeight: 'bold'
  };

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setDentist(res.data))
      .catch(error => {
        console.error('Error fetching data:', error); 
      });
  }, []);

  return (
    <>
      <h1>Detalle de dentista # {id}</h1>
      {dentist && (
        <table style={tableStyle}>
            <tbody>
                <tr style={sectionTitleStyle}>
                    <th colSpan="2">Datos personales</th>
                </tr>
                <tr>
                    <th>ID</th>
                    <td>{dentist['id'] ?? 'N/A'}</td>
                </tr>
                <tr>
                    <th>Nombre</th>
                    <td>{dentist['name'] ?? 'N/A'}</td>
                </tr>
                <tr>
                    <th>Username</th>
                    <td>{dentist['username'] ?? 'N/A'}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{dentist['email'] ?? 'N/A'}</td>
                </tr>
                <tr style={sectionTitleStyle}>
                    <th colSpan="2">Datos de contacto</th>
                </tr>
                <tr>
                    <th>Calle</th>
                    <td>{dentist['address']?.['street'] ?? 'N/A'}</td>
                </tr>
                <tr>
                    <th>Suite</th>
                    <td>{dentist['address']?.['suite'] ?? 'N/A'}</td>
                </tr>
                <tr>
                    <th>Ciudad</th>
                    <td>{dentist['address']?.['city'] ?? 'N/A'}</td>
                </tr>
                <tr>
                    <th>Código Postal</th>
                    <td>{dentist['address']?.['zipcode'] ?? 'N/A'}</td>
                </tr>
                <tr>
                    <th>Latitud</th>
                    <td>{dentist['address']?.['geo']?.['lat'] ?? 'N/A'}</td>
                </tr>
                <tr>
                    <th>Longitud</th>
                    <td>{dentist['address']?.['geo']?.['lng'] ?? 'N/A'}</td>
                </tr>
                <tr>
                    <th>Teléfono</th>
                    <td>{dentist['phone'] ?? 'N/A'}</td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>{dentist['website'] ?? 'N/A'}</td>
                </tr>
                <tr style={sectionTitleStyle}>
                    <th colSpan="2">Compañía</th>
                </tr>
                <tr>
                    <th>Nombre</th>
                    <td>{dentist['company']?.['name'] ?? 'N/A'}</td>
                </tr>
                <tr>
                    <th>Catch Phrase</th>
                    <td>{dentist['company']?.['catchPhrase'] ?? 'N/A'}</td>
                </tr>
                <tr>
                    <th>BS</th>
                    <td>{dentist['company']?.['bs'] ?? 'N/A'}</td>
                </tr>
            </tbody>
        </table>
      )}
    </>
  )
}

export default Detail