import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <div>
    <h1>
      Front-end assignment
      {' '}
      <small>by Michael Rambeau</small>
    </h1>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName={classes.activeRoute}>
      Counter
    </Link>
    {' · '}
    <Link to='/game' activeClassName={classes.activeRoute}>
      Game
    </Link>
  </div>
)

export default Header
