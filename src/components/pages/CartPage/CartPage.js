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
    <div className="container-fluid mb-5 p-5">
      <div className={styles.wrapper}>

          <Header />

        {addedPizzasToCart.length > 0 ? (
          <div className= "container">

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
    </div>
  );
};
export default CartPage;
