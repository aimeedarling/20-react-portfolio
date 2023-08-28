// import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.scss'
import { Outlet } from 'react-router-dom'
import Navigation from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navigation />
      <div className="hero-image">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
