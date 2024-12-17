import React, { useEffect, useState } from "react";
import styles from "./Gallery.module.css";
import { Image, Pagination, ConfigProvider } from "antd";
import { useGetFotosQuery } from "../../../api/rtkApi";

export default function Gallery() {
  const [isActive, setIsActive] = useState(2016);
  const [year, setYear] = useState("2016");
  const [currentPage, setCurrentPage] = useState("1");
  const itemsPerPage = "10";

  const [query, setQuery] = useState(
    `fotos?${currentPage && `_page=${currentPage}`}&${
      itemsPerPage && `_per_page=${itemsPerPage}`
    }&${year && `year=${year}`}`
  );

  const { fotos, totalItems } = useGetFotosQuery(query, {
    selectFromResult: ({ data }) => ({
      fotos: data?.fotos,
      totalItems: data?.totalItems,
    }),
  });

  const showTotal = (totalItems) => `Всего ${totalItems} фото`;

  useEffect(() => {
    setQuery(
      `${currentPage && `_page=${currentPage}`}&${
        itemsPerPage && `_per_page=${itemsPerPage}`
      }&${year && `year=${year}`}`
    );
  }, [currentPage, year, itemsPerPage]);

  const onChange = (currentPage) => {
    setCurrentPage(currentPage);
  };

  function toggle(e) {
    setIsActive(e.target.innerHTML);
    setYear(e.target.innerHTML);
    setCurrentPage("1");
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            itemBg: "rgba(41, 53, 21, 0.8)",
            itemSize: 45,
            margin: "10px"
          },
        },
      }}
    >
      <div className={styles.gallery_wrapper}>
        <h1 className={styles.gallery_title}>Галерея</h1>
        <div className={styles.paginationWrapper }><Pagination
          defaultCurrent={currentPage}
          current={currentPage}
          total={totalItems}
          showTotal={showTotal}
          onChange={onChange}
          responsive={true}
          align={"center"}
          showSizeChanger={false}
          pageSize={itemsPerPage}
        /></div>
        
        <div className={styles.selector}>
          <Button text={"2016"} toggle={toggle} isActive={isActive} />
          <Button text={"2017"} toggle={toggle} isActive={isActive} />
          <Button text={"2018"} toggle={toggle} isActive={isActive} />
          <Button text={"2019"} toggle={toggle} isActive={isActive} />
          <Button text={"2020"} toggle={toggle} isActive={isActive} />
          <Button text={"2021"} toggle={toggle} isActive={isActive} />
          <Button text={"2022"} toggle={toggle} isActive={isActive} />
          <Button text={"2023"} toggle={toggle} isActive={isActive} />
          <Button text={"2024"} toggle={toggle} isActive={isActive} />
        </div>
        
        <div className={styles.gallery_wrapper_fotos}>
          <div className={styles.gallery_fotos}>
            {fotos?.map((item) => (
              <div key={item.id} className={styles.gallery_item}>
                <Image
                  key={item.id}
                  src={item.url}
                  alt=""
                  // width={200}
                  height={200}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}

function Button({ text, isActive, toggle }) {
  return (
    <div>
      {isActive === text ? (
        <button onClick={(e) => toggle(e)} className={`${styles.activeBtn} `}>
          {text}
        </button>
      ) : (
        <button
          onClick={(e) => toggle(e)}
          className={`${styles.selector_btn} `}
        >
          {text}
        </button>
      )}
    </div>
  );
}
