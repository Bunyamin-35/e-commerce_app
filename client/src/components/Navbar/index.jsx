import React from 'react'
import styles from "./navbar.module.css"
import logo from "../../assets/logo.png"

import { NavLink,Link } from "react-router-dom"


import { Badge } from 'antd';

import {
  HomeOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
  SearchOutlined
} from '@ant-design/icons';

const Navbar = () => {


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
        <NavLink to="/login" className={styles.sign_in}>
          <LoginOutlined />
          <div>Sign In</div>
        </NavLink>
        <Badge count={5} offset={[-30, -4]}>
          <Link to="/" className={styles.cart}>
            <ShoppingCartOutlined />
            <div>Cart</div>
          </Link>
        </Badge>
      </div>
    </div >
  )
}

export default Navbar;