import React from "react";
import cn from "classnames";

import styles from "./Sort.module.scss";

const sortCategory = ["популярности", "цене", "алфавиту"];

const Sort = ({
  changeModalSorted,
  modalSorted,
  selectedSortCategory,
  changeSelectedSortCategory,
}) => {
  return (
    <div
      className={cn(
        styles.sort,
        "col-3 d-flex align-items-center position-relative justify-content-end"
      )}
      onClick={() => changeModalSorted()}
    >
      {modalSorted ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-down-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-up-fill"
          viewBox="0 0 16 16"
        >
          <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
        </svg>
      )}

      <b>Сортировка по:</b>
      <span>{sortCategory[selectedSortCategory]}</span>

      {modalSorted && (
        <div className={styles.modal}>
          <ul>
            {sortCategory.map((item, idx) => {
              return (
                <li
                  className={selectedSortCategory === idx ? styles.active : ""}
                  key={`sort_${idx}`}
                  onClick={() => {
                    changeSelectedSortCategory(idx);
                    changeModalSorted();
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
