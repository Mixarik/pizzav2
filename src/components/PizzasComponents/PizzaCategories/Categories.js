import React from "react";

import styles from "./Categories.module.scss";

import { CATEGORIES } from "./Categories.constants";

const Categories = ({ selectedCategory, changeSelectedCategory }) => {
  return (
    <div className="col d-flex align-items-center">
      <div className="container">
        <div className="row">
          {CATEGORIES.map((item, idx) => (
            <div
              key={`category_${idx}`}
              onClick={() => changeSelectedCategory(idx)}
              className={`${selectedCategory === idx ? styles.active : ""} ${
                styles.items
              } col d-flex justify-content-center `}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Categories;
