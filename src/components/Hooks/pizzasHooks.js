import {useContext} from "react";
import {AppContext} from "../Context/AppProvider";

export const  usePizzas = () => useContext(AppContext);
