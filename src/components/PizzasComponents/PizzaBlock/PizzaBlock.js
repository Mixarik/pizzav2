import React, { useState } from "react";
import cn from "classnames";

import { usePizzas } from "../../Hooks/pizzasHooks";

import styles from "./PizzaBlock.module.scss";
import {PIZZA_BLOCK, TYPES} from "./PizzaBlock.constants";

const PizzaBlock = ({ imageUrl, name, price, sizes, types, id, count }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedType, setSelectedType] = useState(0);

  const { addPizzaToCart } = usePizzas();

  return (
    <div className={cn(styles.pizzaBlock)}>
      <img src={imageUrl} alt="Pizza" />

      <h4 className={styles.name}>{name}</h4>

      <div className={styles.info}>
        <ul>
          {types.map((el, idx) => (
            <li
              key={`type_${idx}`}
              className={selectedType === idx ? `${styles.active}` : ""}
              onClick={() => setSelectedType(idx)}
            >
              {TYPES[el]}
            </li>
          ))}
        </ul>

        <ul>
          {sizes.map((el, idx) => (
            <li
              key={`size_${idx}`}
              className={selectedSize === el ? `${styles.active}` : ""}
              onClick={() => setSelectedSize(el)}
            >
              {el} {PIZZA_BLOCK.SM}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.pizzaBlockBottom}>
        <div className={styles.price}>{PIZZA_BLOCK.FROM} {price} {PIZZA_BLOCK.RUB}</div>
        <div
          onClick={() => addPizzaToCart(id, selectedType, selectedSize)}
          className={styles.addPizza}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
          </svg>
          <span> {PIZZA_BLOCK.ADD} {count}</span>
        </div>
      </div>
    </div>
  );
};
export default PizzaBlock;
