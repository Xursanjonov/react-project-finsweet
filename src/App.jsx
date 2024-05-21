import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/index'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import Category from './pages/category/Category'
import Auth from './pages/auth/Auth'
import Admin from './pages/admin/Admin'
import About from './pages/about/About'
import CategoryDetails from './components/category-details/CategoryDetails'

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='blog' element={<Blog />} />
          <Route path='category' element={<Category />} />
          <Route path='category/:id' element={<CategoryDetails />} />
        </Route>
        <Route path='/' element={<Auth />}>
          <Route path='admin' element={<Admin />} />
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App