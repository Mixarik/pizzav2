import React from "react";
import cn from "classnames";

import styles from "./Categories.module.scss";

import { CATEGORIES } from "./Categories.constants";

const Categories = ({ selectedCategory, changeSelectedCategory }) => {
  return (
    <div className="col-9 d-flex align-items-center">
      {CATEGORIES.map((item, idx) => (
        <div
          key={`category_${idx}`}
          onClick={() => changeSelectedCategory(idx)}
          className={`${selectedCategory === idx ? styles.active : ""} ${
            styles.items
          } col`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
export default Categories;
