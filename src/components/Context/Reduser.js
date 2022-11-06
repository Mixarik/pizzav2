export const reducer = (state, action) => {
  switch (action.type) {

    case "setPizza":
      return { ...state, pizzas: action.payload };

    case "setAddedPizzasToCart": {
      return { ...state, addedPizzasToCart: action.payload };
    }

    case "localStorageAddedPizzas": {
      return { ...state, addedPizzasToCart: JSON.parse(action.payload) };
    }

    default:
      throw Error("Unknown action: " + action.type);
  }
};
