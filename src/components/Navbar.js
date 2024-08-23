import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
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
  const navigate = useNavigate();

  const goLogin = () => {
    navigate("login");
  };
  const logout = () => {
    setAuthenticate(false);
    navigate("/");
  };

  const goHome = () => {
    navigate("/");
  };

  const searchKey = (event) => {
    if (event.key == "Enter") {
      console.log("엔터클릭");
      const keyword = event.target.value;
      console.log(keyword);
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div>
        {!authenticate ? (
          <div className="login-button" onClick={goLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div className="bg">로그인</div>
          </div>
        ) : (
          <div className="login-button" onClick={logout}>
            <FontAwesomeIcon icon={faUser} />
            <div className="bg">로그아웃</div>
          </div>
        )}
        <div>
          <div className="nav-section">
            <img
              alt="상품이미지"
              width={100}
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
              onClick={goHome}
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
              <input
                placeholder="제품검색"
                className="search-input"
                onKeyDown={(event) => {
                  searchKey(event);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
