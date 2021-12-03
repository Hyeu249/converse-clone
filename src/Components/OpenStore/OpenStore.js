import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import TitleStore from "./TitleStore/TitleStore";
import FilterStore from "./FilterStore/FilterStore";
import Shoes from "./Shoes/Shoes";
import CartModal from "./CartModal/CartModal";
import { useState } from "react";

function OpenStore() {
  const [isBuy, setIsBuy] = useState([{}, false]);
  const [sortPrice, setSortPrice] = useState();

  return (
    <div>
      <Header />
      <Navbar />
      <TitleStore />
      <FilterStore sortPrice={sortPrice} setSortPrice={setSortPrice} />
      <CartModal isBuy={isBuy} setIsBuy={setIsBuy} />
      <Shoes sortPrice={sortPrice} setIsBuy={setIsBuy} />
    </div>
  );
}

export default OpenStore;
