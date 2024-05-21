import React, { memo, useState } from 'react'
import { axiosUrl } from '../../config'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();
    const [username, setUsername] = useState('kminchelle')
    const [password, setPassword] = useState('0lelplR')

    const handleLogin = e => {
        e.preventDefault()
        let user = { username, password }
        setLoading(true)

        axiosUrl.post('/auth/login', user)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("x-auth-token", res.data.token)
                navigate("/admin/create")
            })
            .catch(err => {
                console.log(err);
                toast.error("username or password is incorrect")
            })
            .finally(() => setLoading(false))
    }

    return (
        <section className='w-[480px] h-[420px] pt-4 mx-auto mt-24 flex flex-col items-center justify-center rounded-2xl bg-white'>
            <h1 className='text-3xl mb-6 font-bold text-black'>Login</h1>
            <form onSubmit={handleLogin} className='w-full px-10 grid grid-cols-1 items-center justify-center gap-6'>
                <label className='flex flex-col items-start justify-center gap-2 font-bold text-black' htmlFor="username">Username:
                    <input type="text" id="username" required value={username} onChange={(e) => setUsername(e.target.value)}
                        className='input input-secondary w-full shadow-md rounded-xl bg-white' />
                </label>
                <label className='flex flex-col items-start justify-center gap-2 font-bold text-black' htmlFor="password">Password:
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                        className='input input-secondary w-full shadow-md rounded-xl bg-white' />
                </label>
                <button className='w-[200px] mx-auto mt-5 btn text-2xl btn-success' type="submit">Login</button>
            </form>
        </section>
    )
}

export default memo(Login)