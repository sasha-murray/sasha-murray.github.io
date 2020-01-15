import React from 'react'
import me from '../../assets/me.jpeg'


export const About = () => {
  return (
    <div className="container">
      <article className="about">
        <section>
          <header className="header">
            <h1>About Me</h1>
            <p>With a background in maths, linguistics and logic, development seemed like the best way to combine my passion for problem-solving with my creative side.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, natus. Quo est cupiditate vitae impedit?</p>
          </header>
          <figure className="portrait" >
            <img src={me} alt="portrait of Sasha" />
          </figure>
          <header className="header">
            <h2>Skills</h2>
            <ul>
              <li>Agile</li>
              <li>TDD (Test-Driven Development)</li>
              <li>Mob programming</li>
              <li>Algorithms and Data Structures</li>
              <li>Pedagogy</li>
              <li>Problem solving</li>
              <li>Cryptology</li>
              <li>Linguistics</li>
              <li>Dynamic Logic</li>
              <li>Machine Learning</li>
              <li>Natural Language Processing (NLP)</li>
            </ul>
            <h2>Technologies</h2>
            <p>Front-end</p>
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
            <p>Back-end</p>
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
          </header>

        </section>
        <br />
        <section>
          <header className="header">
            <h1>About this website</h1>
            <h2>Semantic HTML is the future</h2>
          </header>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate mollitia provident cum ratione molestiae, officia ea. Ab vel quam consectetur quo expedita delectus et officiis exercitationem magnam dolores, odio molestias.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit porro aspernatur dicta est at exercitationem aliquid consequatur, atque error, odio esse, quas doloremque consequuntur quo necessitatibus. Eveniet illum voluptatum architecto.</p>
          <p>Beatae reiciendis mollitia tempore saepe, error quo laudantium odio quod, quibusdam nam voluptates! Unde, quasi laudantium. Laborum amet nihil eos illum debitis cumque animi magni modi labore alias, quod temporibus.</p>
          <p>Ullam recusandae architecto in accusamus nobis unde, harum odit pariatur modi. Distinctio nisi ex, earum tempora eos molestiae ab harum accusantium alias sit quos vitae possimus eius assumenda temporibus in.</p>
        </section>
      </article>
    </div>
  )
}
