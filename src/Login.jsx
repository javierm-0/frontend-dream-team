import { useState } from 'react'
import ucnLogo from './assets/ucnLogo.png'
import './login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    <div id="root">
      <div className="center">
        <img src={ucnLogo} className='logo' alt='Logo UCN'/>
        <h1 className='login-title'>¡Bienvenid@ al Sistema!</h1>
        <p className='login-message'>Inicie sesión para acceder a las funcionalidades del sistema</p>

        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Usuario" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  )
}

export default Login
