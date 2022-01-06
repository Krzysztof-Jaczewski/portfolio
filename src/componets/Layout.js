import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <Navbar />
        <div className="content">{children}</div>
      </div>
      <footer>Copyright 2022</footer>
    </>
  )
}

export default Layout
