/* eslint-disable indent */
import React, {useEffect} from 'react'
import classNames from 'classnames';
import {useLocation} from 'react-router-dom';

import styles from "./styles.scss"

const MenuCheckbox = ({ checked, onChange }) => (
  <div className={styles.menuCheckbox}>
    <input checked={checked} onChange={onChange} type="checkbox" id="check"/> 
    <label htmlFor="check">
      <span />
      <span />
      <span />
    </label>
  </div> 
);

const Menu =() => {
  const [checked, setChecked] = React.useState(false);
  const location = useLocation();

  const handleChange= (e) => {
    setChecked(e.target.checked)
  }

  const closeMenu = () => setChecked(false);

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
        
        {location.pathname != "/about" && (
          <a onClick={closeMenu} href="#about" >
            about
          </a>
          )}

        {location.pathname != "/projects" && (
          <a onClick={closeMenu} href="#projects">
            projects
          </a>
          )}

        {/* {location.pathname != "/art" && (
          <a onClick={closeMenu} href="#art">
            art
          </a>
          )} */}

        {location.pathname != "/" && (
          <a onClick={closeMenu} href="#">
            home
          </a>
          )}

      </div>
    </div>
  )
}

export default Menu;
