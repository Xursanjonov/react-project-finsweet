import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'

const Layout = () => {
    return (
        <Fragment>
            <Header />
            <main className='w-[1519px]'> <Outlet /> </main>
            <Footer />
        </Fragment>
    )
}

export default Layout