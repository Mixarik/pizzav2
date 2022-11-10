import React from "react";

import cn from "classnames";
import styles from "./ContentCart.module.scss";

import { TYPES, CONTENT_CART } from "./ContentCard.constants";

const ContentCart = ({
  imageUrl,
  name,
  price,
  sizes,
  types,
  count,
  id,
  updateAddedPizzasCount,
  removePizza,
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-5">
      <div className={cn(styles.info, "d-flex align-items-center")}>
        <img src={imageUrl} alt="Pizza" />

        <div className={styles.category}>
          <h3>{name}</h3>
          <p>
            {TYPES[types]}, {sizes} {CONTENT_CART.SM}
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-around fw-bold fs-5">
        <div
          onClick={() => {
            count > 1 && updateAddedPizzasCount(id, count - 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className={cn(styles.icon, "bi bi-dash-circle")}
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
          </svg>
        </div>
        <b>{count}</b>
        <div
          onClick={() => {
            updateAddedPizzasCount(id, count + 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className={cn(styles.icon, "bi bi-dash-circle")}
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </div>
      </div>

      <div className="fw-bold fs-5">
        <b>
          {price * count} {CONTENT_CART.RUB}
        </b>
      </div>

      <div className={styles.remove} onClick={() => removePizza(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-x-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>
    </div>
  );
};
export default ContentCart;
