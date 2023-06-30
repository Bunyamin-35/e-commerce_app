import React from 'react'
import styles from "./categories.module.css"
import {NavLink} from "react-router-dom"


const Categories = () => {

  const categories = ["Computers & Laptops","Mobile Phones & Tablets","Televisions & Home Entertainment","Audio & Headphones","Cameras & Photography","Smart Home Devices","Printers & Scanners"]
  
  return (
    <div className={styles.category}>
      {categories.map((category,index) => {
        return(
          <div className={styles.category_item} key={index}>
            <NavLink to="/">{category}</NavLink>
          </div>
        )
      })}
    </div>
  )
}

export default Categories;