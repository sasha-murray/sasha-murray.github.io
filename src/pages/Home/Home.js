import React from 'react'
import me from '../../assets/me.jpeg'


export const Home = () => {
  return (
    <div className="container">
      <article className="bio">
        <header className="header">
          <h1>I'm Sasha Murray</h1>
          <h2>I write code and stuff</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam similique est ea facilis maxime deleniti placeat molestiae corporis eveniet eligendi!</p>
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur dolorum fuga recusandae neque voluptates praesentium ea blanditiis earum delectus quod. Quos aut tempora qui quam minima. Similique at veritatis inventore excepturi consequuntur reiciendis voluptate molestiae perspiciatis totam magnam eos laborum minus amet, quas culpa cupiditate! Ex non illo quos labore!
        </p>
      </article>
      <img src={me} className="portrait" alt="portrait of Sasha" />
    </div>
  )
}
