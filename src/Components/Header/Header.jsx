import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from './header.module.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/search?q=${searchTerm}`);
      setSearchTerm('');
    }
  };




  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.back}>
          <FontAwesomeIcon className={classes.onback} icon={faCircleLeft} style={{ color: "#a3abb8" }} />
        </div>
        <div className={classes.input}>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder='Search'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FontAwesomeIcon className={classes.search} icon={faSearch} />
          </form>
        </div>
        <FontAwesomeIcon icon={faBell} className={classes.fabell} style={{ color: "#a3abb8" }} />
      </nav>
      <Outlet />
    </header>
  );
}

export default Header;
