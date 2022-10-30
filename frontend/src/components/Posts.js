import React from 'react'
import Post from "./Post"
import "./Style.css"
export default function Posts() {
  return (
    <>
     <div className="posts">
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6MBNr_oMmV2M4jdRB5QJ-NokHqG3UWqQHA&usqp=CAU" />
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyYwwJpieFU0mQJYeTIYTEQ_payVVRYKo-KvXNgATnx4n0WyGsKwJVKpR5zXQwaadxWE&usqp=CAU" />
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOKHBJvDopsb1fN0Dz9BCvj8JGszpD3DDCQ&usqp=CAU"/>
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQEJkDgpmQLhvxRtLYO5-bGdgoo5-RS8XZA&usqp=CAU"/>
      <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-g7X80mLe06qcLEQM4O0QKHNwTm0GdW3-hkQkXZsqHnt135j4SyOHdk4H0p5U8q48XI&usqp=CAU" />

    </div>
    </>
  )
}
