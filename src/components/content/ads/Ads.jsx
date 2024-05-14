import React from "react";
import style from './Ads.module.css'
import { useSelector } from "react-redux";

export default function Ads() {
  const select = useSelector((state) => state.adsSlider)

  return (
    <div className={style.ads_container}>
      
      <div className={style.ads_wrapper}>
      {select.map(el => {
        return <AdsItem key={el.id} el={el} />;
      })}
        </div>
    </div>
  );
}

function AdsItem({ el }) {
  return (
    <li key={el.id}>
      <div className={style.ads_item}>{el.text}</div>
    </li>
  );
}