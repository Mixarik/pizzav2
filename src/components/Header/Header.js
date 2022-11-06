import React from "react";
import cn from "classnames";

import logoSvg from "../../assets/img/pizza-logo.svg";

import { usePizzas } from "../Hooks/pizzasHooks";

import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

import {HEADER} from './Header.constants'

const Header = () => {
  const { addedPizzasToCart, getPizzasPrice } = usePizzas();
  return (
    <div className="row justify-content-center">
      <div className={cn(styles.logo, "col-md-4")}>
        <Link to={"/"}>
          <img width="38" src={logoSvg} alt="Pizza logo" />
        </Link>
        <div>
          <h2>{HEADER.TITLE}</h2>
          <p>{HEADER.BEST_PIZZA}</p>
        </div>
      </div>

      <div className={cn(styles.cart, "col-md-4 offset-md-4 span-md-4")}>
        <Link to="/cart" className={styles.itemsCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>

          <span>
            {addedPizzasToCart.length} - {getPizzasPrice()} ₽
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
