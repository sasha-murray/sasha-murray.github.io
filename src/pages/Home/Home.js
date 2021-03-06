import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="container">
      <article>
        <header>
          <h1>Hi, I&#39;m Sasha Murray</h1>
          <h2>I&#39;m a versatile full-stack web developer and programmer.</h2>
          <p>I have a diverse set of skills, ranging from design, semantic HTML, React and Angular on the front-end to Express, API, and databases on the back-end.  </p>
          <p>For a more comprehenive overview of my skills and technologies, take a look <Link to='/about'>here</Link></p>
        </header>
        <p>

        </p>
      </article>
    </div>
  )
}
