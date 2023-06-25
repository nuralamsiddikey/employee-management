import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

export default function Header() {
  return (

    <nav className="navbar navbar-expand-lg " style={{ background: 'white' }}>

      <div className="container-fluid px-5">

        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">


          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <h4 style={{ color: '#093446' }}>HR Management</h4>
            </li>
          </ul>
        </div>



        <div className="d-flex align-items-center">

          <a className="text-reset me-3" href="#">
            <i className="fas fa-shopping-cart"></i>
          </a>


          <div className='d-flex align-items-center gap-5'>
          <NotificationsOutlinedIcon />
          <div className="dropdown">
            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://avatars.githubusercontent.com/u/68794315?v=4"
                className="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <a className="dropdown-item" href="#">My profile</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Settings</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Logout</a>
              </li>
            </ul>
          </div>
          </div>


        </div>
      </div>

    </nav>

  );
}
