import { useState } from "react";
import axios from 'axios';


const Login = () => {
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    

    const handleLoginClick = async (evento: { preventDefault: () => void; }) => {
        evento.preventDefault();
        
        if(!user || !password){
            alert("Ingrese nombre de usuario y contraseña");
            return;
        }
        
        try {
            const response = await axios.post("URLDELBACKEND", {
                user,
                password,
            });
        } catch (error) {
            if(axios.isAxiosError(error)){
                alert("error de axios: "+ error);
            }
            else{
                alert("error: "+ error);
            }
        }


    };

    return (
        <div className="flex h-full w-screen">
            <div className="w-[40%] flex justify-center bg-gray-200 items-center">
                <div className="bg-white h-[65%] p-8 rounded-lg border-gray-600 border-4">
                    <h1 className="font-montserrat text-5xl text-black">
                        Login
                    </h1>
                    <br></br>
                    <p className="text-gray-400">Bienvenido de nuevo</p>
                    <form className="translate-y-10">
                        <div className='usuario'>
                                <label htmlFor='user' className='text-black text-2xl font-semibold'>Nombre de usuario</label>
                                <br></br>
                                <input 
                                    placeholder='Enter user name here...'
                                    type='text'
                                    id='usuario'
                                    value={user}
                                    onChange={(evento) =>setUser(evento.target.value)}
                                    maxLength={16}
                                    style={{ width:'300px'}}
                                    className={`w-full text-2xl border-gray-300 border-2 rounded-md mt-3 py-2 hover:bg-gray-200`}/>
                        </div>

                        <br></br>
                      <div className='password'>
                          <label htmlFor='password' className='text-black text-2xl font-semibold'>Contraseña</label>
                          <br></br>
                          <input
                              placeholder="Enter password..."
                              type="password"
                              id="password"
                              value={password}
                              onChange={(evento) =>setPassword(evento.target.value)}
                              style={{ width:'300px'}}
                              className={`w-full text-2xl border-gray-300 border-2 rounded-md mt-3 py-2 hover:bg-gray-200`}
                              maxLength={16}
                          />
                      
                      </div>
                                {/*boton de log-in*/}
                                <button
                                  type='submit'
                                  className={`-translate-x-2 translate-y-3 text-white py-3 px-6 text-3xl rounded-3xl mt-4 ml-6 transform hover:scale-105 active:scale-95  bg-gray-900 hover:bg-gray-950`}
                                  onClick={handleLoginClick}
                                  >
                                    Iniciar Sesión
                                  </button>


                    </form>
                </div>
            </div>
            <div className="bg-gray-700 w-[60%]"></div>
        </div>
    );
};

export default Login;
