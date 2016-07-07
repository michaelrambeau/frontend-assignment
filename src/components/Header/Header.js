import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

const links = [
  // {
  //   path: '/',
  //   text: 'Home'
  // },
  {
    path: '/game',
    text: 'Game'
  },
  {
    path: '/counter',
    text: 'Counter'
  }
]

export const Header = () => (
  <div className={classes.header}>
    <div className="small-container">
      <nav className="nav">
        <div className="nav-left">
          {links.map(link => (
            <MenuItem link={link} key={link.path} />
          ))}
        </div>
        <div className="nav-right">
          <a className="nav-item" href="http;//michaelrambeau.com">
            by Michael Rambeau
          </a>
        </div>
      </nav>
    </div>
  </div>
)

const MenuItem = ({ link }) => {
  const Item = link.path === '/' ? IndexLink : Link
  return (
    <Item
      to={link.path}
      activeClassName="is-active"
      className={'nav-item is-tab'}
      key={link.path}
    >
      {link.text}
    </Item>
  )
}

export default Header
