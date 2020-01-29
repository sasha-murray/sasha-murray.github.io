import React from 'react'

export const Projects = () => {
  return (
    <div className="container">
      <article>
        <header>
          <h1>Things I&#39;ve built</h1>
          <h2>[Still being populated]</h2>
        </header>
        <section>
          <header>
            <h2>Multiplayer Quiz</h2>
            <p>A real-time quiz, not entirely dissimilar to Kahoot!</p>
            <p>Built using React/Redux, Material UI, socket.io, Express, and Postgres.</p>
          </header>
          <p>Hosted on Netlify, with the database running on Google Cloud SQL</p>
          <p>Built together with Axel Eriksson and Victor Stenström-Diaz as our final project at &lt;/salt&gt;</p>
        </section>
        <section>
          <header>
            <h2>Full-Stack Chat App</h2>
            <p>A single-room, multi-user chat application</p>
            <p>Built using React/Redux, Material UI, socket.io, and Express.</p>
          </header>
          <p>Still being worked on, I aim to refactor this to use the Redux Strategy pattern.</p>
        </section>
        <section>
          <header>
            <h2>Secure Password Lookup</h2>
            <p>A simple web app that tells you if your password occurs in any of the publicly available password dumps on the internet.</p>
            <p>A hackday project built to showcase my own implementation of SHA-1, and <a href="https://en.wikipedia.org/wiki/K-anonymity">k-anonymization</a></p>
          </header>
          <p>Built in 8 hours at &lt;/salt&gt;. (I had started implementing SHA-1 in advance)</p>
        </section>
      </article>
    </div>
  )
}
