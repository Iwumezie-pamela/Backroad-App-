import React from "react";
import logo from "../images/logo.svg";
import styled from "styled-components";
import { MdFacebook } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io";
import { FaSquarespace } from "react-icons/fa";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--clr-white);
  box-shadow: var(--dark-shadow);
  z-index: 2;
  height: 4rem;
  display: flex;
  align-items: center;

  .nav-logo {
    max-width: 100%;
    display: block;
    margin-top: 4px;
  }

  .nav--body {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const NavLink = styled.div`
  display: flex;

  .links {
    display: flex;
    list-style-type: none;
    gap: 0.85rem;
    font-size: 1rem;
    cursor: pointer;
  }

  .links a {
    text-decoration: none;
    color: var(--clr-grey-1);
    letter-spacing: 3.5px;
    transition: 0.3s ease-in-out;
  }

  .links a:hover {
    color: var(--clr-primary-5);
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: hsl(36, 100%, 99%);
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 9rem;

    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;

    .links {
      display: block;
    }

    .links li {
      font-weight: 700;
      font-size: 1.8rem;
      margin: 1rem 2rem 2rem;
    }
  }
`;



const NavIcon = styled.div`
  display: flex;
  margin: 0.5rem 0.9rem 0;
  gap: 0.5rem;

  .icon {
    width: 100%;
    height: 1.3rem;
    color: var(--clr-primary-5);
    transition: 0.3s ease-in-out;
  }

  .icon:hover {
    color: var(--clr-primary-8);
  }

  @media (max-width: 768px) {
    flex-flow: row nowrap;
    right: 20%;
    gap: 0.5rem;

    .icon {
      height: 1.3rem;
    }
  }
`;


//burger
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  top: 10px;
  right: 20px;
  z-index: 20;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    margin-top: -1rem;
    flex-flow: column nowrap;
  }

  div {
    margin-left: 1.2rem;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    background-color: var(--clr-primary-5);

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  
  return (
    <Nav className="nav">
      <div className="nav--body">
        <div className="nav-logo">
          <a href="#home">
            <img src={logo} id="#home" alt="" />
          </a>
        </div>
        <NavLink open={open} >
          <ul className="links" onClick={()=>setOpen(false)}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#tours">Tours</a>
            </li>
          </ul>
        </NavLink>

        <NavIcon open={open}>
          <a
            href="https://web.facebook.com/?_rdc=1&_rdr"
            target="_blank"
            rel="noreferrer"
          >
            <MdFacebook className="icon " />
          </a>

          <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
            <IoLogoTwitter className="icon" />
          </a>
          <a
            href="https://www.google.com/search?q=squarespace"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquarespace className="icon" />
          </a>
        </NavIcon>

        <StyledBurger  onClick={handleClick}>
          <div />
          <div />
          <div />
        </StyledBurger>
      </div>
    </Nav>
  );
};

export default Navbar;
