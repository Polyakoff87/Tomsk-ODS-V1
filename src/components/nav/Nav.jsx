import React from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Nav() {
  const select = useSelector((state) => state.nav)
  // const isBlind = useSelector((state) => state.blindToggle)
  
  return (
    <div className={styles.menu}>
      {select.map(el => {
        return <NavElement key={el.id} el={el} />;
      })}
    </div>
  );
}

function NavElement({ el }) {
  return (
    <li key={el.id}>
      <NavLink to={el.to}>{el.name}</NavLink>
    </li>
  );
}
