import React from 'react'
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg'
import { ReactComponent as Github } from '../../assets/github.svg'
import { ReactComponent as Gmail } from '../../assets/gmail.svg'

export const Footer = () => {
  return (
    <footer>
      <div className="left">
        <p> &copy; 2020 Sasha Murray</p>
      </div>
      <div className="socials right">
        <a href="https://www.linkedin.com/in/sasha-jacnj-murray/">
          <LinkedIn className="svg" />
        </a>
        <a href="https://github.com/sasha-murray">
          <Github className="svg" />
        </a>
        <a href="mailto:sasha.murray@appliedtechnology.se">
          <Gmail className="svg" />
        </a>
      </div>
    </footer>
  )
}
