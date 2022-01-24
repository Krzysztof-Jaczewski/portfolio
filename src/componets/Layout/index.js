import React from "react"
import Footer from "../Footer"
import Navbar from "../Navbar/Navbar"
import "normalize.css"
import "./styled.css"

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <Navbar />
        <div className="content">{children}</div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
