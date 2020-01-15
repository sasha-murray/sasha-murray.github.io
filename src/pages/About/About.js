import React from 'react'
import me from '../../assets/me.jpeg'


export const About = () => {
  const myAge = () => {
    const birthday = new Date('1996-12-11T06:50:00')
    const ageInMS = Date.now() - birthday
    const ageDate = new Date(ageInMS)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
  const nerdLink = 'https://slackprop.wordpress.com/2013/06/03/on-geek-versus-nerd/'
  return (
    <div className="container">
      <article className="about">
        <header className="header about">
          <div>
            <h1>About Me</h1>
            <p>My name is Sasha, I'm a {myAge()}-year-old developer and nerd/geek - <a href={nerdLink}> you name it</a></p>
            <p>With a background in maths, linguistics and logic, coding seemed like the best way to combine my passion for problem-solving with my creative side.</p>
          </div>
          <figure className="portrait" >
            <img src={me} alt="portrait of Sasha" />
          </figure>
        </header>
        <br/>
        <div className="list about">
          <header className="header">
            <h2>Skills and Technologies</h2>
          </header>
          <div>
            <h3>Skills</h3>
            <ul>
              <li>Agile</li>
              <li>TDD (Test-Driven Development)</li>
              <li>Mob programming</li>
              <li>Algorithms and Data Structures</li>
              <li>Cryptology</li>
              <li>Computational Linguistics</li>
              <li>Dynamic Logic</li>
              <li>Machine Learning</li>
            </ul>
          </div>
          <div>
            <h3>Front-end</h3>
            <ul>
              <li>Semantic HTML</li>
              <li>TypeScript</li>
              <li>Socket.io</li>
              <li>CSS3</li>
              <li>Angular</li>
              <li>React</li>
              <li>Jest</li>
              <li>Enzyme</li>
              <li>Mocha</li>
              <li>Redux</li>
              <li>Babel</li>
              <li>WebPack</li>
              <li>jQuery</li>
            </ul>
          </div>
          <div>
            <h3>Back-end</h3>
            <ul>
              <li>Node.js</li>
              <li>Websockets</li>
              <li>WebRTC</li>
              <li>REST</li>
              <li>Mocha</li>
              <li>Express.js</li>
              <li>Google Cloud Platform</li>
              <li>AWS</li>
              <li>SQL</li>
              <li>Postgres</li>
              <li>MongoDB</li>
              <li>JWT</li>
              <li>OAuth</li>
              <li>Auth0</li>
              <li>ElasticSearch</li>
              <li>Apache</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  )
}
