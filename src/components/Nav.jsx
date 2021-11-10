import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DesktopMenu,
  HamburgerButton,
  MobileMenu,
} from "./styled/SignedInApp.styled";

const Nav = () => {
  const [navOpen, setNav] = useState(false);

  return (
    <>
      <HamburgerButton onClick={() => setNav(c => !c)}>
        <i className="fas fa-bars" />
      </HamburgerButton>
      <MobileMenu open={navOpen}>
        <Link to="/" onClick={() => setNav(false)}>
          <h1>Social Media</h1>
        </Link>
        <Link to="/" onClick={() => setNav(false)}>
          <p>Feed</p>
        </Link>
        <Link to="/profile" onClick={() => setNav(false)}>
          <p>Account</p>
        </Link>
      </MobileMenu>
      <DesktopMenu>
        <Link to="/" onClick={() => setNav(false)}>
          <h1>Social Media</h1>
        </Link>
        <Link to="/" onClick={() => setNav(false)}>
          <p>Feed</p>
        </Link>
        <Link to="/profile" onClick={() => setNav(false)}>
          <p>Account</p>
        </Link>
      </DesktopMenu>
    </>
  );
};

export default Nav;
