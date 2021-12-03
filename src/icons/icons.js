import classes from "./icons.module.css";
import cart from "../img/Icon/Cart-shoping.png";

const CartIcon = ({ style, className, onClick }) => {
  return (
    <img
      src={cart}
      className={`${className} `}
      style={{
        width: "20px",
        height: "20px",
        ...style,
      }}
      alt="heartIcon"
      onClick={onClick}
    />
  );
};

const HeartLineIcon = ({ style, className, onClick }) => {
  return (
    <img
      src="https://img.icons8.com/fluency-systems-regular/48/000000/like--v2.png"
      className={className}
      style={{ ...style }}
      alt="heartIcon"
      onClick={onClick}
    />
  );
};

const BlackHeartIcon = ({ style, className, onClick }) => {
  return (
    <img
      src="https://img.icons8.com/fluency-systems-filled/48/000000/like.png"
      className={className}
      style={{ ...style }}
      alt="heartIcon"
      onClick={onClick}
    />
  );
};

const FilterIcon = ({ style, className, onClick }) => {
  return (
    <img
      src="https://img.icons8.com/ios-glyphs/30/000000/sorting-options.png"
      className={`${className} ${classes.ableClick}`}
      style={{ width: "20px", height: "20px", ...style }}
      onClick={onClick}
      alt="icon"
    />
  );
};

const SeeMoreIcon = ({ style, className, onClick }) => {
  return (
    <svg
      viewBox="0 0 20 20"
      style={{ width: "20px", ...style }}
      className={`${className} ${classes.ableClick}`}
      onClick={onClick}
    >
      <path d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z"></path>
    </svg>
  );
};

export { SeeMoreIcon, FilterIcon, HeartLineIcon, BlackHeartIcon, CartIcon };
