import React from 'react'
import "./Style.css"

export default function Sidebar() {
  return (
    <>
    <div className="sidebar">
      <div className="sidebar-Item">
        <span className="sidebar-title">ABOUT ME</span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-rKNOnZZLVycTS1rRHswhNySgdy3DRJxF4A&usqp=CAU"alt=""/>
        <p>Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit amet ex esse.Sunt eu ut nostrud id quis proident.</p>
      </div>
      <div className="sidebar-Item">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-List">
          <li className="sidebar-listItem">Life</li>
          <li className="sidebar-listItem">Music</li>
          <li className="sidebar-listItem">Sport</li>
          <li className="sidebar-listItem">Style</li>
          <li className="sidebar-listItem">Tech</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <div className="social">
        <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-facebook-square"></i>
        </div>
      </div>
    </div>
    </>
  )
}
