import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { PiShoppingCartLight } from "react-icons/pi";
import Logo from "../../assets/images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getToken, removeSession } from "../../helper/SessionHelper";
import { useSelector } from "react-redux";

const HeaderTwo = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();
  const getValue = useSelector((state)=>state.cart.value)

  const onSearch = (e) => {
    e.preventDefault();
    if (searchKeyword.length === 0) {
      toast.error("Search Keyword Required!");
    } else {
      navigate("/product-by-search/" + searchKeyword);
    }
  };
  const handleLogOut = () => {
    removeSession();
  };
  return (
    <Navbar expand="lg" className="shadow-sm py-3" style={{backgroundColor:"#333A73"}}>
      <Container>
        <Link to="/">
          <img src={Logo} width={200} alt="" />
        </Link>
        <Navbar.Toggle className="bg-white" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Form className="d-flex">
              <input
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="search_bar"
                type="text"
                placeholder="Search For Products"
              />
              <div className="">
                <button
                  onClick={onSearch}
                  className="btn btn-primary search_icon"
                  type="submit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ width: 25, height: 25 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </Form>
          </Nav>
          <Nav>
          <Link className="px-3" to="/cart-list">
              <PiShoppingCartLight size={30} className="text-white" />
              <span className="text-warning">{getValue.length}</span>
            </Link>
            {getToken() ? (
              <>
                <button
                  onClick={handleLogOut}
                  className="btn btn-primary btn-sm"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white px-1 btn btn-primary btn-sm px-3"
                >
                  Login
                </Link>
              </>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderTwo;
