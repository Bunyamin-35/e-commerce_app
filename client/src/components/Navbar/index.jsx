import React from 'react'
import styles from "./navbar.module.css"
import logo from "../../assets/logo.png"

import { NavLink, Link } from "react-router-dom"
import { useAuth } from '../../contexts/authContext'


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

const Navbar = () => {
  const { isLoggedIn } = useAuth();


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
            </NavLink> <NavLink to="/login" className={styles.sign_in}>
              <LogoutOutlined />
              <div>Sign Out</div>
            </NavLink>
          </> : <NavLink to="/login" className={styles.sign_in}>
            <LoginOutlined />
            <div>Sign In</div>
          </NavLink>}

        <Badge count={5} offset={[-30, -4]}>
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