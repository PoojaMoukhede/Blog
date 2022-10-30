import React from 'react'
import "./Style.css"
import { Link } from "react-router-dom";

export default function Post({img}) {
  return (
    <>
  <div className="post">
      <img className="post-img"src={img} alt=""/>
      <div className="Info">
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="Time">2 hour ago</span>
      </div>
      <p className="desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>

    </>
  )
}
