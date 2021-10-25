/* eslint-disable indent */
import React, { useState } from 'react'
import classNames from 'classnames';

import styles from "./index.scss"

const MenuCheckbox = (props) => (
  <div className={styles.menuCheckbox}>
    <label htmlFor="check">
      <input checked={props.checked} onChange={props.onChange} type="checkbox" id="check"/> 
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div> 
)

const Menu =(props) => {
  const [checked, setChecked] = useState(false);

  const handleChange= (e) => {
    setChecked(e.target.checked)
  }

  const handleClick = (route) => {
    setChecked(false);
    window.location = route;
  }

  const handleOpen = (path) => {
    setChecked(false);
    window.open(path);
  }

  const hash = window.location.hash;
  const validHashes = ["#art", "#about", "#projects"]
  
  return (
    <div className={styles.menu}>

      <MenuCheckbox checked={checked} onChange={handleChange} />

      <div 
        className={classNames(
          styles.dropDown, 
          {[styles.slideIn] : checked }
        )}
      >
        <a onClick={() => handleOpen('./static/documents/resume.pdf')}>
          CV
        </a>
        <a onClick={() => handleOpen('./static/documents/portfolio.pdf')}>
          portfolio
        </a>
        
        {hash != "#about"
          ? <a onClick={() => handleClick("#about")}>
            about
          </a>
          : null}

        {hash != "#projects"
          ? <a onClick={() => handleClick("#projects")}>
            projects
          </a>
          : null}

        {hash != "#art"
          ? <a onClick={() => handleClick("#art")}>
            art
          </a>
          : null}

        {hash && validHashes.includes(hash)
          ? <a onClick={() => handleClick("/")}>
              home
            </a>
          : null}
      </div>
    </div>
  )
}

export default Menu;
