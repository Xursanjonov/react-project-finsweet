import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const logo = '{Finsweet'

const Header = () => {
    let { pathname } = useLocation()
    let isLogin = localStorage.getItem('x-auth-token')

    if (pathname.includes('login') || pathname.includes('admin')) return <></>

    return (
        <header className='w-[1519px] px-12 py-2 flex items-center justify-between bg-black text-white'>
            <Link to={'/'} className='text-xl font-bold'>{logo}</Link>
            <div className="flex items-center justify-center gap-6">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/blog'}>Blog</NavLink>
                <NavLink to={'/about'}>About Us</NavLink>
                {isLogin ? (
                    <Link to={'/admin'} className='w-[120px] text-center ms-4 py-2 text-lg font-bold bg-white text-black'>
                        Admin
                    </Link>) : (
                    <>
                        <NavLink to={'/register'}>Regiter</NavLink>
                        <Link to={'/login'} className='w-[120px] text-center ms-4 py-2 text-lg font-bold bg-white text-black'>Login</Link>
                    </>
                )}
            </div>
        </header>
    )
}

export default Header