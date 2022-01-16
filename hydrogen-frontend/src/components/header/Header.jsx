import React from 'react'
import { FaBell, FaCompactDisc, FaAngleDown, FaInstagram } from "react-icons/fa";
import './header.css'
import image from "../../assets/houcine-ncib-IEbIKXo0fBc-unsplash.jpg";


const Header = () => {
    return (
      <header>
        <div className="header-wrapper">
          <div className="header-logo">
            <span>
              <FaInstagram />
            </span>
            <span>HydrogenPayroll</span>
          </div>
          <ul className="header-right">
            <li>
              <FaCompactDisc />
            </li>
            <li>
              <FaBell />
            </li>
            <li className="name">Ovie Idholo</li>
            <li>
              <FaAngleDown />
            </li>
            <li className="image-icon">
              <img
                src={image}
                alt=""
              />
            </li>
          </ul>
        </div>
        <ul className="header-dashboard">
          <li>Dashboard</li>
          <li>Payslips</li>
        </ul>
      </header>
    );
}

export default Header;