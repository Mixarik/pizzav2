import React, { useState } from "react";

import { Header } from "../../Header";
import { Categories } from "../../PizzasComponents/PizzaCategories";
import { Sort } from "../../PizzasComponents/PizzaSort";
import { PizzaBlock } from "../../PizzasComponents/PizzaBlock";

import { usePizzas } from "../../Hooks/pizzasHooks";

import styles from "./PizzaPage.module.scss";

const PizzaPage = () => {
  const { pizzas, addedPizzasToCart, isLoading } = usePizzas();

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedSortCategory, setSelectedSortCategory] = useState(0);
  const [modalSorted, setModalSorted] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const changeModalSorted = () => setModalSorted((prevState) => !prevState);

  const changeSelectedSortCategory = (newState) =>
    setSelectedSortCategory(newState);

  const changeSelectedCategory = (newState) => setSelectedCategory(newState);

  const copyPizzas = [...pizzas];

  const sortPizzas = (allPizzas) => {
    switch (selectedSortCategory) {
      case 0:
        return allPizzas.sort((a, b) => b.rating - a.rating);
      case 1:
        return allPizzas.sort((a, b) => a.price - b.price);
      case 2:
        return allPizzas.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      default: {
      }
    }
  };

  const filteredPizzas = (category, sorted) => {
    if (category === 0) {
      return renderListPizzas(sorted);
    } else {
      const filtered = sorted.filter((item) => item.category === category);
      return renderListPizzas(filtered);
    }
  };

  const searchItem = () => {
    if (inputValue.trim()) {
      return copyPizzas.filter((el) =>
        el.name.toLowerCase().includes(inputValue)
      );
    } else return copyPizzas;
  };

  const renderListPizzas = (arr) => {
    return arr.map((el) => {
      const count =
        addedPizzasToCart
          .find((pizza) => pizza.id === el.id)
          ?.count.toString() || "";

      return <PizzaBlock key={el.id} {...el} count={count} />;
    });
  };

  return (
    <div className="container-fluid p-5">
      <div className={styles.wrapper}>
        <Header />

        <input
          className="form-control mb-5"
          type="text"
          placeholder="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <div className="row d-flex align-items-center mb-5">
          <Categories
            selectedCategory={selectedCategory}
            changeSelectedCategory={changeSelectedCategory}
          />
          <Sort
            selectedSortCategory={selectedSortCategory}
            changeModalSorted={changeModalSorted}
            modalSorted={modalSorted}
            changeSelectedSortCategory={changeSelectedSortCategory}
          />
        </div>

        <h2 className={styles.title}>?????? ??????????</h2>

        <div className="row">
          {isLoading
            ? "loading..."
            : filteredPizzas(selectedCategory, sortPizzas(searchItem()))}
        </div>
      </div>
    </div>
  );
};
export default PizzaPage;
