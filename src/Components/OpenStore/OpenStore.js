import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import TitleStore from "./TitleStore/TitleStore";
import FilterStore from "./FilterStore/FilterStore";
import Shoes from "./Shoes/Shoes";
import CartModal from "./CartModal/CartModal";
import { useState } from "react";

function OpenStore() {
  const [isBuy, setIsBuy] = useState([{}, false]);
  return (
    <div>
      <Header />
      <Navbar />
      <TitleStore />
      <FilterStore />
      <CartModal isBuy={isBuy} setIsBuy={setIsBuy} />
      <Shoes setIsBuy={setIsBuy} />
    </div>
  );
}

export default OpenStore;
