/* eslint-disable indent */
import React from 'react'
import classNames from 'classnames';

import styles from "./styles.scss"

const MenuCheckbox = (props) => (
  <div className={styles.menuCheckbox}>
    <label htmlFor="check">
      <input checked={props.checked} onChange={props.onChange} type="checkbox" id="check"/> 
      <span />
      <span />
      <span />
    </label>
  </div> 
);

const Menu =() => {
  const [checked, setChecked] = React.useState(false);

  const handleChange= (e) => {
    setChecked(e.target.checked)
  }

  const closeMenu = () => setChecked(false);

  const hash = window.location.hash;

  // handle close on offclick
  window.addEventListener('click', function(e){  
    const menu = document.getElementById('menu-dropdown');
    if (menu && !menu.contains(e.target)){
      setChecked(false);
    }
  });

  return (
    <div id="menu-dropdown" className={styles.menu}>
      <MenuCheckbox checked={checked} onChange={handleChange} />

      <div 
        className={classNames(
          styles.dropDown, 
          {[styles.slideIn] : checked }
        )}
      >
        <a onClick={closeMenu} target="_blank" href='./static/documents/resume.pdf'> 
          cv
        </a>
        <a onClick={closeMenu} target="_blank" href='./static/documents/portfolio.pdf'>
          portfolio
        </a>
        
        {hash != "#about" && (
          <a onClick={closeMenu} href="#about" >
            about
          </a>
          )}

        {hash != "#projects" && (
          <a onClick={closeMenu} href="#projects">
            projects
          </a>
          )}

        {/* {hash != "#art" && (
          <a onClick={closeMenu} href="#art">
            art
          </a>
          )} */}

        {hash && (
          <a onClick={closeMenu} href="#">
            home
          </a>
          )}

      </div>
    </div>
  )
}

export default Menu;
