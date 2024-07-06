import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchForm from "./SearchForm";
import "../../Css/Header.css";
import { FaUserEdit } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { BsBookmarks } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import SkeletonElement from "../Skeletons/SkeletonElement";
import { AuthContext } from "../../Context/AuthContext";

const Header = () => {
  const bool = localStorage.getItem("authToken") ? true : false;
  const [auth, setAuth] = useState(bool);
  const { activeUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAuth(bool);
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, [bool]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <header>
      <div className="averager">
        <Link to="/" className="logo">
          <h5>HerTechTool</h5>
        </Link>
        <SearchForm />
        <div className="header_options">
          <AiOutlineMenu
            className="dropdown-toggle"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="dropdown-menu">
              {auth ? (
                <>
                  <Link className="addStory-link" to="/addstory">
                    Add Opportunity
                  </Link>
                  <Link className="addStory-link" to="/tools">
                    About
                  </Link>
                  <Link className="addStory-link" to="/roadmap">
                    Roadmaps
                  </Link>
                  <Link className="addStory-link" to="/quiz">
                    Test yourself
                  </Link>
                  <Link to="/readList" className="readList-link">
                    <BsBookmarks />
                    <span id="readListLength">{activeUser.readListLength}</span>
                  </Link>
                  <div className="header-profile-wrapper ">
                    {loading ? (
                      <SkeletonElement type="minsize-avatar" />
                    ) : (
                      <img
                        src={`/userPhotos/${activeUser.photo}`}
                        alt={activeUser.username}
                      />
                    )}
                    <div className="sub-profile-wrap">
                      <Link className="profile-link" to="/profile">
                        <FaUserEdit /> Profile
                      </Link>
                      <button className="logout-btn" onClick={handleLogout}>
                        <BiLogOut /> Logout
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Link className="addStory-link" to="/login">
                    Login
                  </Link>
                  <Link className="addStory-link" to="/register">
                    Get Started
                  </Link>
                </>
              )}
            </div>
          )}
          <div className={dropdownOpen ? "auth_options" : "auth_options"}>
            {auth ? (
              <>
                <Link className="addStory-link" to="/addstory">
                  Add Opportunity
                </Link>
                <Link className="addStory-link" to="/tools">
                  About
                </Link>
                <Link className="addStory-link" to="/roadmap">
                  Roadmaps
                </Link>
                <Link className="addStory-link" to="/quiz">
                  Test yourself
                </Link>
                <Link to="/readList" className="readList-link">
                  <BsBookmarks />
                  <span id="readListLength">{activeUser.readListLength}</span>
                </Link>
                <div className="header-profile-wrapper">
                  {loading ? (
                    <SkeletonElement type="minsize-avatar" />
                  ) : (
                    <img
                      src={`/userPhotos/${activeUser.photo}`}
                      alt={activeUser.username}
                    />
                  )}
                  <div className="sub-profile-wrap">
                    <Link className="profile-link" to="/profile">
                      <FaUserEdit /> Profile
                    </Link>
                    <button className="logout-btn" onClick={handleLogout}>
                      <BiLogOut /> Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link className="addStory-link" to="/login">
                  Login
                </Link>
                <Link className="addStory-link" to="/register">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
