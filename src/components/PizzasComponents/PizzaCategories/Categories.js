import React from "react";
import cn from "classnames";

import styles from "./Categories.module.scss";

import { CATEGORIES } from "./Categories.constants";

const Categories = ({ selectedCategory, changeSelectedCategory }) => {
  return (
    <div className={cn(styles.categories, "col-md-8")}>
      <div className="container">
        <div className="row">
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
      </div>
    </div>
  );
};
export default Categories;
