import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유어",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  return (
    <div>
      <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div className="bg">로그인</div>
        </div>
        <div>
          <div className="nav-section">
            <img
              width={100}
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
            />
          </div>
          <div className="menuSection">
            <ul className="menu-list">
              {menuList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="search-section">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input placeholder="제품검색" className="search-input" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
