import React from 'react'
import me from '../../assets/me.jpeg'


export const About = () => {
  return (
    <div className="container">
      <article className="about">
        <section>
          <header className="header">
            <h1>About Me</h1>
            <h2>I also like philosophy and books and maths and stuff</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, natus. Quo est cupiditate vitae impedit?</p>
          </header>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio culpa ad, nulla fuga expedita quia sed tempora ipsa laudantium voluptate rerum possimus accusantium perferendis eveniet ducimus repellendus exercitationem obcaecati sunt!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At inventore quos ut temporibus assumenda consequatur esse quam dicta, quidem eius doloribus aliquid fugit culpa voluptate, ad enim nesciunt minima beatae vel, provident labore accusamus praesentium fuga accusantium! Reiciendis, quae nesciunt.</p>
          <figure className="portrait" >
      <img src={me} alt="portrait of Sasha" />
     </figure>
        </section>
        <br/>
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
