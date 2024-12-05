import { useState } from "react";

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgb(179 168 168)',
  padding: '20px',
  margin: 'auto',
  marginTop: '50px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '400px',
};

const inputContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '15px',
  width: '100%',
};

const inputStyle = {
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ddd',
  fontSize: '16px',
  width: '100%',
};

const buttonStyle = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#007bff',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '10px',
};

const errorStyle = {
  color: 'red',
  marginBottom: '10px',
  fontWeight: 'bold',
};

const successStyle = {
  color: 'green',
  marginBottom: '10px',
  fontWeight: 'bold',
};

const Form = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
  
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setErrorMessage('');
      setSuccessMessage('');
  
  
      if (formData.name.length <= 5) {
        setErrorMessage('Por favor verifique su nombre nuevamente');
        return;
      }
  
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        setErrorMessage('Por favor verifique su correo nuevamente');
        return;
      }
  
      setSuccessMessage(`Gracias ${formData.name}, te contactaremos cuando antes vía mail`);
    };
    
  return (
    <div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2>Formulario de Contacto</h2>
        <div style={inputContainerStyle}>
          <label htmlFor="name">Nombre completo:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre completo"
            style={inputStyle}
            required
          />
        </div>
        <div style={inputContainerStyle}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo electrónico"
            style={inputStyle}
            required
          />
        </div>
        {errorMessage && <p style={errorStyle}>{errorMessage}</p>}
        {successMessage && <p style={successStyle}>{successMessage}</p>}
        <button type="submit" style={buttonStyle}>Enviar</button>
      </form>
    </div>
  );
};

export default Form;