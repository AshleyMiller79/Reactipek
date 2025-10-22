
import { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

const[open,setOpen]=useState(false)


// open ı değiştirme yetkisi hem hamburgere hem link lerin divine verilmeli, çünkü görünen useLinkClickHandler, hem hamburgere hemde linke tıkladığımda kaybolmalı. open değişkenini true iken link display:flex olsun false iken none olsun istediğimden, stil sayfasına open ı props ile yolladım
  return (
    <Nav>
      <Logo to="/home">
        <i> {"<Clarusway/>"}</i>
        <span>recipe</span>
      </Logo>

      <Hamburger onClick={() => setOpen(!open)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu osman={open} onClick={() => setOpen(false)}>
        <MenuLink to="/about">About</MenuLink>
        {/* <MenuLink>Github</MenuLink> */}
        <a href="https://github.com/" target="blank">
          Github
        </a>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
