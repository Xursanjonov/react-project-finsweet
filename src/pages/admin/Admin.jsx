import React from 'react'
import { Navigate } from 'react-router-dom'

const Admin = () => {
    const removeToken = () => {
        localStorage.removeItem('x-auth-token')
        Navigate('/login')
    }

    return (
        <div className='w-[1519px] h-[100vh] flex flex-col items-center justify-center bg-gray-200'>
            <h1 className='text-[4rem] font-bold text-blue-600'>Admin Panel</h1>
            <div className="mt-8 flex items-center justify-center gap-20">
                <button className='btn font-bold text-lg text-white btn-success'>Go Home</button>
                <button onClick={removeToken} className='btn font-bold text-lg text-white btn-success'>
                    Log out
                </button>
            </div>
        </div>
    )
}

export default Admin