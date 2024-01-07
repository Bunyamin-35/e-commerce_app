import React from 'react'
import styles from "./navbar.module.css"
import logo from "../../assets/logo.png"

import { NavLink, Link } from "react-router-dom"
import { useAuth } from '../../contexts/authContext'
import { useCookies } from 'react-cookie'


import { Badge } from 'antd';

import {
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined
} from '@ant-design/icons';
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn} = useAuth();
  const [cookies, removeCookie] = useCookies([]);
  const basket = useSelector(state => state.cart.basket)
  //const basket = JSON.parse(localStorage.getItem("basket") ?? "[]");


  const handleLogout = () => {
    if (cookies.accesstoken) {
      removeCookie("accesstoken");
      setIsLoggedIn(false);
      console.log("Logout process is carried out!");
    }
  }
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt='logo_image' />
      </Link>
      <form className={styles.search}>
        <input placeholder='Search for new' />
        <SearchOutlined className={styles.searchicon} />
      </form>
      <div className={styles.actions}>
        <NavLink to={"/"} className={styles.homepage}>
          <HomeOutlined />
          <div>Home</div>
        </NavLink>
        <NavLink to="/orders" className={styles.sign_in}>
          <ShoppingOutlined />
          <div>Orders</div>
        </NavLink>
        {isLoggedIn ?
          <>
            <NavLink to="/dashboard" className={styles.sign_in}>
              <UserOutlined />
              <div>Dashboard</div>
            </NavLink>
            <NavLink to="/login" className={styles.sign_in} onClick={handleLogout}>
              <LogoutOutlined />
              <div>Sign Out</div>
            </NavLink>
          </> : <NavLink to="/login" className={styles.sign_in}>
            <LoginOutlined />
            <div>Sign In</div>
          </NavLink>}

        <Badge count={basket.length} offset={[-30, -4]}>
          <NavLink to="/cart" className={styles.cart}>
            <ShoppingCartOutlined />
            <div>Cart</div>
          </NavLink>
        </Badge>
      </div>
    </div >
  )
}

export default Navbar;