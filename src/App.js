import React, { useEffect } from 'react'
import './styles/main.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Projects } from './pages/Projects/Projects'

function App () {
  useEffect(() => {
    const path = localStorage.getItem('path')
    if (path) {
      localStorage.removeItem('path')
      window.history.push(path)
    }
  }, [])
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>

  )
}

export default App
