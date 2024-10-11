import { useState } from "react";


const Login = () => {
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    return (
        <div className="flex h-full w-screen">
            <div className="w-[40%] flex justify-center bg-gray-200 items-center">
                <div className="bg-white h-[65%] p-8 rounded-lg border-gray-600 border-4">
                    <h1 className="font-montserrat text-5xl text-black">
                        Login
                    </h1>
                    <br></br>
                    <p className="text-gray-400">Bienvenido de nuevo</p>
                    <form className="translate-y-20">
                        <div className='usuario'>
                                <label htmlFor='user' className='text-black text-2xl font-semibold'>User Name</label>
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
                          <label htmlFor='password' className='text-black text-2xl font-semibold'>Password</label>
                          <br></br>
                          <input
                              placeholder="Enter password..."
                              type="password"
                              id="password"
                              value={password}
                              onChange={(evento) =>setPassword(evento.target.value)}
                              style={{ width:'300px'}}
                              className={`w-full text-2xl border-gray-300 border-2 rounded-md mt-7 py-2 hover:bg-gray-200`}
                              maxLength={16}
                          />
                      </div>
                    </form>
                </div>
            </div>
            <div className="bg-gray-700 w-[60%]"></div>
        </div>
    );
};

export default Login;
