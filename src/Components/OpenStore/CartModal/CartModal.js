import { Fragment } from "react";
import "./CartModal.css";
import cartImg from "../../../img/Icon/Cart-shoping.png";
import ProductItem from "./ProductItem/ProductItem";

function CartModal({ isBuy, setIsBuy }) {
  const getProduct = isBuy.filter((product) => {
    if (typeof product === "object") return true;
    return false;
  });
  const totalPrice = getProduct.reduce((total, product) => {
    return total + product.price * product.total;
  }, 0);
  let textIsFreeShip, shipPrice;
  if (totalPrice > 99) {
    textIsFreeShip = "Your order ship for free!";
    shipPrice = "Free";
  } else {
    textIsFreeShip = `Spend an extra $${99 - totalPrice}.00 to ship for free`;
  }

  return (
    <Fragment>
      <div
        className={`itemCart ${isBuy[isBuy.length - 1] ? "" : "offCartModal"}`}
      >
        <div className="add-to-cart-itemCart inline">
          <div className="text-line1 inline font-4">
            (<span className="span-text-line1">{getProduct.length}</span>) items
            in your cart
          </div>
          <div className="in-add-to-cart">
            <div style={{ cursor: "pointer" }}>
              <img src={cartImg} alt="" className="icon icon-3" />
              <p className="p-cart-header2 font-2"></p>
            </div>
          </div>
        </div>
        <div
          className="delete-cart_itemCart font-2"
          style={{ userSelect: "none" }}
          onClick={() => {
            setIsBuy((state) => {
              const newState = state.map((product) => {
                if (product === true) return (product = false);
                return product;
              });
              return newState;
            });
          }}
        >
          X
        </div>
        <div className="line3-itemCart">
          Students enjoy 15% off.{" "}
          <div
            className="inline black"
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            See details.
          </div>
        </div>
        <div className="line4-itemCart">{textIsFreeShip}</div>
        <p
          className={`cam-line4 ${totalPrice > 99 ? "bgSuccessfull" : ""}`}
        ></p>
        <div className="productAll-itemCart">
          {/* <div className="product-itemCart"> */}
          {getProduct[0].id &&
            getProduct.map((product) => {
              return (
                <ProductItem
                  key={product.id}
                  product={product}
                  setIsBuy={setIsBuy}
                />
              );
            })}
          {/* </div> */}
        </div>
        <div className="total-itemCart-cart">
          <div className="Subtotal-itemCart inline font-0">
            Subtotal <p className="border-circle inline font-4">?</p>
          </div>
          <div
            className="inline"
            style={{ paddingRight: "20px", lineHeight: "1" }}
          >
            ${getProduct[0].id && totalPrice}
            .00
          </div>
        </div>
        <div className="ship-itemCart-cart">
          <div className="textShip-itemCart inline font-0">
            Shipping <p className="border-circle inline font-4">?</p>{" "}
          </div>
          <p
            className="inline font-2"
            style={{ paddingRight: "20px", lineHeight: "1" }}
          >
            {shipPrice}
          </p>
          <img
            src="/img/PNG/Tich-Xanh.png"
            alt=""
            className="certified-img none"
          />
        </div>

        <div className="checkOut-itemCart font-2">CheckOut</div>
        <div className="momoCheckout-itemCart font-2">MoMo</div>
        <div className="textDone-itemCart">
          <a href="/tshirts/cart" className="black">
            See full cart
          </a>{" "}
          to enter promo codes and gift options
        </div>
      </div>
    </Fragment>
  );
}

export default CartModal;
