import "../../assets/css/header.css"
import "../../assets/js/headerJS"
import Logo from "../../assets/images/logo.png"
const HeaderThree = () => {
  return (
    <div>
      <header>
        <a
          className="logo-link"
          href="/"
        >
          <div className="logo-box">
              <img src={Logo} className="w-25" alt="" />
          </div>
        </a>

        <nav>
          <a
            className="header-link"
            href="/"
          >
            Home
          </a>
        </nav>

        <button className="menu-button" id="menu-button">
          <i className="bi bi-list"></i>
        </button>
      </header>

      <div className="sidebar" id="sidebar">
        <div className="sidebar-header">
          <span className="sidebar-title">Menu</span>
          <button className="close-button" id="close-button">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <a
          className="sidebar-link"
          href="/"
        >
          Home
        </a>
        <a
          className="sidebar-link"
          href="/cart-list"
        >
          Cart List
        </a>
        <a
          className="sidebar-link"
          href="/login"
        >
          Login
        </a>
      </div>

      {/* search bar  */}
      <div className="search-bar md-d-none">
        <input type="text" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default HeaderThree;
