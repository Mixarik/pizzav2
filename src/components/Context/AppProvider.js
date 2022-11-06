import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
  useReducer,
} from "react";

import { reducer } from "./Reduser";

export const AppContext = createContext({
  pizzas: [],
  addedPizzasToCart: [],
  pizzasParams: [],
});

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [state1, dispatch] = useReducer(reducer, {
    pizzas: [],
    addedPizzasToCart: [],
    pizzasParams: [],
  });


  const { pizzas, addedPizzasToCart, pizzasParams } = state1;

  const setAddedPizzasToCart = (addedPizzasToCart) => {
    localStorage.setItem("addedPizzas", JSON.stringify(addedPizzasToCart));
    dispatch({ type: "setAddedPizzasToCart", payload: addedPizzasToCart });
  };

  const addPizzaToCart = (id, types, sizes) => {
    const existingPizza = addedPizzasToCart.find((pizza) => pizza.id === id);
    if (existingPizza) {
      setAddedPizzasToCart([
        ...addedPizzasToCart.filter((pizza) => pizza.id !== id),
        { ...existingPizza, count: existingPizza.count + 1 },
      ]);
    } else {
      pizzas.forEach((item) => {
        item.id === id &&
          setAddedPizzasToCart([
            ...addedPizzasToCart,
            { ...item, types, sizes, count: 1 },
          ]);
      });
    }
  };

  const resetPizzaCart = () => {
    setAddedPizzasToCart([]);
  };

  const updateAddedPizzasCount = (id, count) => {
    setAddedPizzasToCart(
      addedPizzasToCart.map((pizza) =>
        pizza.id === id ? { ...pizza, count } : pizza
      )
    );
  };

  const getPizzasPrice = () =>
    addedPizzasToCart.reduce((prices, { count, price }) => {
      prices += count * price;
      return prices;
    }, 0);

  const getPizzasCount = () =>
    addedPizzasToCart.reduce((totalCount, { count }) => {
      totalCount += count;
      return totalCount;
    }, 0);

  const removePizza = (id) => {
    setAddedPizzasToCart(addedPizzasToCart.filter((pizza) => pizza.id !== id));
  };

  useEffect(() => {
    fetch(
      "https://63483f1a0b382d796c6d9668.mockapi.io/api/photo_collection/collections"
    )
      .then((res) => res.json())
      .then((pizzas) => dispatch({ type: "setPizza", payload: pizzas }))
      .catch((err) => {
        alert(err);
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useLayoutEffect(() => {
    const addedPizzas = localStorage.getItem("addedPizzas");
    if (addedPizzas) {
      dispatch({
        type: "localStorageAddedPizzas",
        payload: addedPizzas,
      });
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        pizzas,
        isLoading,
        addedPizzasToCart,
        addPizzaToCart,
        resetPizzaCart,
        updateAddedPizzasCount,
        getPizzasPrice,
        removePizza,
        getPizzasCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
