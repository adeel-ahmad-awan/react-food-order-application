import React from "react";

import mealsImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onclick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="Meals " />
      </div>
    </React.Fragment>
  );
}

export default Header;
