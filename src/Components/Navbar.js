import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link } from "react-router-dom";

const Navbar = ({ cartItems }) => {
  const [openMenu, setOpenMenu] = useState(false);
  let totalQuantity = 0;
  cartItems.forEach(item => {
    totalQuantity += item.quantity;
  });


  const menuOptions = [
    {
      text: "Sayfamız",
      icon: <HomeIcon />,
      id: "home",
      href: "/",
    },
    {
      text: "Hakkımızda",
      icon: <InfoIcon />,
      id: "about",
      href: "#about",
    },
    {
      text: "Menüler",
      icon: <CommentRoundedIcon />,
      id: "menu",
      href: "/menu",
    },
    {
      text: "İletişim",
      icon: <PhoneRoundedIcon />,
      id: "contact",
      href: "#contact",
    },
    {
      text: "Sepet",
      icon: <ShoppingCartRoundedIcon />,
      id: "cart",
      href: "/cart",
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar-links-container">
        <a href="#about">Hakkımızda</a>
        <Link to="/menu">Menüler</Link>
        <a href="#contact">İletişim</a>
        <Link to="/cart">
          <BsCart2 className="navbar-cart-icon" />
          {cartItems.length >= 1 && <span className="navbar-cart-icon-size" >{totalQuantity}</span>}
        </Link>

        <Link className="primary-button" to="/menu">
          Sipariş Oluştur
        </Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton href={item.href}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
