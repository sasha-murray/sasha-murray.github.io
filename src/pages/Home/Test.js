import React from 'react'
import me from '../../assets/me.jpeg'


export const Test = () => {
  return (
<div className="container test">
      <article className="bio test">
        <header className="header test">
          <h1 className="test">I'm Sasha Murray</h1>
          <h2 className="test">I write code and stuff</h2>
          <p className="test">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam similique est ea facilis maxime deleniti placeat molestiae corporis eveniet eligendi!</p>
        </header>
        <p className="test">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur dolorum fuga recusandae neque voluptates praesentium ea blanditiis earum delectus quod. Quos aut tempora qui quam minima. Similique at veritatis inventore excepturi consequuntur reiciendis voluptate molestiae perspiciatis totam magnam eos laborum minus amet, quas culpa cupiditate! Ex non illo quos labore!
        </p>
      </article>
      <figure className="portrait" >
      <img src={me} alt="portrait of Sasha" />
     </figure>
    </div>
  )
}
