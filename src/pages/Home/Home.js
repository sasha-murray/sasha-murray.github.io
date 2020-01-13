import React from 'react'
import me from '../../assets/me.jpeg'


export const Home = () => {
  return (
    <div className="App">
      <h1>I'm Sasha Murray</h1>
      <h2>I write code and stuff</h2>
      <img src={me} className="portrait" alt="portrait of Sasha"/>
    </div>
  )
}
