import React, { useState } from "react";
import cn from "classnames";

import { usePizzas } from "../../Hooks/pizzasHooks";

import styles from "./PizzaBlock.module.scss";
import { PIZZA_BLOCK, TYPES } from "./PizzaBlock.constants";

const PizzaBlock = ({ imageUrl, name, price, sizes, types, id, count }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedType, setSelectedType] = useState(0);

  const { addPizzaToCart } = usePizzas();

  return (
    <div className="col-4 d-flex flex-column align-items-center fw-bold p-5">
      <img src={imageUrl} alt="Pizza" width="260" />

      <div className={cn("w-100 text-center", styles.pizzaInfo)}>
        <h4 className="fw-bold">{name}</h4>

        <div className="mb-4">
          <div className="mb-3">
            {types.map((el, idx) => (
              <span
                key={`type_${idx}`}
                className={cn(styles.option, {
                  [styles.active]: selectedType === idx,
                })}
                onClick={() => setSelectedType(idx)}
              >
                {TYPES[el]}
              </span>
            ))}
          </div>
          <div>
            {sizes.map((el, idx) => (
              <span
                key={`size_${idx}`}
                className={cn(styles.option, {
                  [styles.active]: selectedSize === el,
                })}
                onClick={() => setSelectedSize(el)}
              >
                {el} {PIZZA_BLOCK.SM}
              </span>
            ))}
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div className={styles.price}>
            {PIZZA_BLOCK.FROM} {price} {PIZZA_BLOCK.RUB}
          </div>
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
            <span>
              {PIZZA_BLOCK.ADD} {count}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PizzaBlock;
