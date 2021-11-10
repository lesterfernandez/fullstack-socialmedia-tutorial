import styled from "styled-components";

const SignedInApp = styled.div``;

export const HamburgerButton = styled.button`
  display: none;
  @media (max-width: 600px) {
    display: inline-block;
    appearance: none;
    --moz-appearance: none;
    --webkit-appearance: none;
    text-decoration: none;
    background-color: transparent;
    border: 0;
    outline: 0;
    position: absolute;
    color: white;
    top: 1rem;
    left: 1rem;
    font-size: 2rem;
    z-index: 2;
  }
`;

export const MobileMenu = styled.nav`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 35%;
  background-color: ${({ theme }) => theme.elevation_2};
  transform: ${({ open }) => (open ? "translateX(0%);" : "translateX(-100%);")};
  transition: transform 0.2s ease-in;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.5rem 0;
  gap: 2rem;
  a {
    font-weight: bold;
    h1 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1.2rem;
      text-decoration: underline;
    }
    color: white;
    text-decoration: none;
    text-align: center;
  }
`;

export const DesktopMenu = styled.nav`
  display: none;
  @media (min-width: 600px) {
    position: sticky;
    display: block;
    background-color: ${({ theme }) => theme.elevation_2};
    height: 20%;
    max-width: 100%;
    display: flex;
    gap: 3rem;
    font-size: 1.7rem;
    align-items: center;
    padding: 1rem 2rem;
    box-shadow: ${({ theme }) => theme.shadow};
    a {
      font-weight: bold;
      h1 {
        font-size: 2.1rem;
      }
      p {
        font-size: 1.8rem;
        &:hover {
          text-decoration: underline;
        }
      }
      color: white;
      text-decoration: none;
      text-align: center;
    }

    a:first-child {
      margin-right: auto;
    }
  }
`;

export default SignedInApp;
