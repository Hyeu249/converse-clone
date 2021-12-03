import classes from "./ShoesItem.module.css";
import {
  HeartLineIcon,
  BlackHeartIcon,
  CartIcon,
} from "../../../../icons/icons";
import { useState } from "react";

function ShoesItem({ shoes, onClick }) {
  const {
    frontImage,
    backImage,
    productName,
    price,
    productGender,
    colorAvailable,
  } = shoes;

  const [isLiked, setIsLiked] = useState();

  return (
    <div className={classes.shoesItem}>
      <div style={{ position: "relative" }}>
        <img
          src={frontImage}
          alt="shoes"
          className={`${classes.heightImage} ${classes.frontImage}`}
        />
        <img
          src={backImage}
          alt="shoes"
          className={`${classes.heightImage} ${classes.backImage}`}
        />
        {!isLiked && (
          <HeartLineIcon
            className={classes.shoesItem_heartIcon}
            onClick={() => setIsLiked(true)}
          />
        )}
        {isLiked && (
          <BlackHeartIcon
            className={classes.shoesItem_heartIcon}
            onClick={() => setIsLiked(false)}
          />
        )}
        <div className={classes.shoesItem_cart} onClick={onClick}>
          <div
            style={{
              padding: "10px 20px",
              fontSize: "0.905rem",
              fontWeight: "700",
              borderRight: "1px solid #e1e1e1",
            }}
          >
            QuickShop
          </div>
          <CartIcon style={{ padding: "10px" }} />
        </div>
      </div>

      {/* product info */}
      <p className={classes.shoesItem_productName}>{productName}</p>
      <div className={classes.shoesItem_price}>${price}.00</div>
      <div className={classes.shoesItem_productGender}>{productGender}</div>
      <div className={classes.shoesItem_colorAvailable}>
        {colorAvailable} color available
      </div>
    </div>
  );
}

export default ShoesItem;
