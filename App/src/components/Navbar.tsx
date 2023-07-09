import { useEffect, useState } from "react";
import styled from "styled-components";
import { Sidebar } from "./Sidebar";
import { Hamburger, Logout, Settings } from "../assets/Icons";

const Header = styled.header`
  grid-area: header;
  background: #1d1d1d;
  height: 50px;
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

const NavButton = styled.div`
  aspect-ratio: 1/1;
  height: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  transition: padding-bottom 0.25s ease;

  &:hover {
    padding-bottom: 5px;
    filter: invert(51%) sepia(85%) saturate(1364%) hue-rotate(211deg)
      brightness(101%) contrast(94%);
  }

  &:hover::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4px;
    background: #fff;
    transition: height 0.25s ease;
  }

  &:active {
    padding-bottom: 8px;
  }

  &:active::after {
    height: 7px;
  }

  &:first-of-type {
    margin-right: auto;
  }
`;

export function Navbar() {
  const [sidebar, setSidebar] = useState(
    JSON.parse(localStorage.getItem("sidebar") || "true")
  );

  useEffect(() => {
    localStorage.setItem("sidebar", sidebar.toString());
  }, [sidebar]);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <Header>
        <NavButton title="Toggle Side Menu" onClick={showSidebar}>
          <Hamburger />
        </NavButton>
        <NavButton title="Launch Settings">
          <Settings />
        </NavButton>
        <NavButton title="Logout">
          <Logout />
        </NavButton>
      </Header>
      <Sidebar isActive={sidebar} />
    </>
  );
}
