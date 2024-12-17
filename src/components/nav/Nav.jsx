import React from "react";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import useResponsiveWidth from "../../hooks/useResponsiveWidth";

export default function Nav() {
  const select = useSelector((state) => state.nav);

  const { width } = useResponsiveWidth();
  const styles = {
    menu: {
      width: `${width}`,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      padding: "0px 15% 0px 15%",
      backgroundColor: "rgba(36, 70, 38, 0.9)",
      position: "sticky",
      top: "-1px",
      zIndex: "100",
      height: "max-content",
    }
   
  };

  return (
    <div style={styles.menu}>
      {select.map((el) => {
        return <NavElement key={el.id} el={el} />;
      })}
    </div>
  );
}

function NavElement({ el }) {
  return (
    <li key={el.id}>
      <NavLink to={el.to} className={style.nav_link}>{el.name}</NavLink>
    </li>
  );
}

