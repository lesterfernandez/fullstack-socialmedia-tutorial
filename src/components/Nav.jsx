import { useState } from "react";
import { Link } from "react-router-dom";
import StyledNav, {
  DesktopMenu,
  HamburgerButton,
  MobileMenu,
} from "./styled/Nav.styled";

const Nav = () => {
  const [navOpen, setNav] = useState(false);
  return (
    <StyledNav>
      <HamburgerButton className="fas fa-bars" onClick={() => setNav(c => !c)} />

      <MobileMenu open={navOpen}>
        <Link to="/" onClick={() => setNav(false)}>
          <h1>Social Media</h1>
        </Link>
        <Link to="/" onClick={() => setNav(false)}>
          <p>Feed</p>
        </Link>
        <Link to="/account" onClick={() => setNav(false)}>
          <p>Account</p>
        </Link>
      </MobileMenu>

      <DesktopMenu>
        <Link to="/">
          <h1>Social Media</h1>
        </Link>
        <Link to="/">
          <p>Feed</p>
        </Link>
        <Link to="/account">
          <p>Account</p>
        </Link>
      </DesktopMenu>
    </StyledNav>
  );
};

export default Nav;
