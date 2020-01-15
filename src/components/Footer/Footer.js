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
        <LinkedIn className="svg" />
        <Github className="svg" />
        <Gmail className="svg" />
      </div>
    </footer>
  )
}
