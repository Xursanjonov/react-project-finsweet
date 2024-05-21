import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

const Footer = () => {
    let { pathname } = useLocation()
    if (pathname.includes('login') || pathname.includes('admin')) return <></>

    return (
        <footer className='w-[1519px] mx-auto py-6 px-12'>
            <div className="container mx-auto flex items-center justify-between">
                <div>
                    <p>Finstreet 118 2561 Fintown</p>
                    <p>Hello@finsweet.com  020 7993 2905</p>
                </div>
                <div className="flex items-center justify-center gap-4 text-lg">
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                    <FaLinkedinIn />
                </div>
            </div>
        </footer>
    )
}

export default Footer