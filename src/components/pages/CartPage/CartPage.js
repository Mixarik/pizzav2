import React from "react";
import cn from "classnames";
import styles from "../CartPage/CartPage.module.scss";

import { Header } from "../../Header";
import { ContentCart } from "../../CartComponents/ContentCart";
import { CartTop } from "../../CartComponents/CartTop";
import { CartBottom } from "../../CartComponents/CartBottom";
import { CartEmpty } from "../../CartComponents/CartEmpty";

import { usePizzas } from "../../Hooks/pizzasHooks";

const CartPage = () => {
  const {
    addedPizzasToCart,
    updateAddedPizzasCount,
    getPizzasPrice,
    removePizza,
    resetPizzaCart,
    getPizzasCount,
  } = usePizzas();

  return (
    <div className={cn(styles.wrapper, "container-fluid")}>
      <div className="row">
        <Header />
      </div>
      {addedPizzasToCart.length > 0 ? (
        <div className={cn(styles.content, "container")}>
          <CartTop resetPizzaCart={resetPizzaCart} />

          {addedPizzasToCart.map((item) => (
            <ContentCart
              key={item.id}
              {...item}
              updateAddedPizzasCount={updateAddedPizzasCount}
              removePizza={removePizza}
            />
          ))}

          <CartBottom
            totalPrice={getPizzasPrice()}
            pizzasCount={getPizzasCount()}
          />
        </div>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};
export default CartPage;
