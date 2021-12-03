import ShoesItem from "./ShoesItem/ShoesItem";
import { Fragment } from "react";
import classes from "./Shoes.module.css";
import alotOfShoes from "./shoesDatabase";

function Shoes({ setIsBuy }) {
  return (
    <Fragment>
      <div className="grid">
        <div className="row l-9 m-10 c-11 margin_auto column">
          <div className={classes.grabShoesItems}>
            {alotOfShoes.map((shoes) => (
              <ShoesItem
                key={shoes.id}
                shoes={shoes}
                onClick={() => {
                  setIsBuy((state) => {
                    if (typeof state[0]?.price === "number") {
                      const uniqueProducts = state.filter((product) => {
                        if (product === true) return true;
                        if (product.id === shoes.id) return false;
                        return true;
                      });
                      const hadOrder = state.filter((product) => {
                        if (product === true) return false;
                        if (product.id === shoes.id) return true;
                        return false;
                      });

                      let productOnCart;
                      if (hadOrder.length > 0) {
                        const newDate = new Date();
                        const deliveryAt = `${newDate.getDate()}/${
                          newDate.getMonth() + 1
                        }/${newDate.getFullYear()}`;

                        const deliveryTo = `${newDate.getDate() + 2}/${
                          newDate.getMonth() + 1
                        }/${newDate.getFullYear()}`;

                        const deliveryDate = `${deliveryAt} - ${deliveryTo}`;

                        const backImage = hadOrder[0].backImage;
                        const frontImage = hadOrder[0].frontImage;
                        const id = hadOrder[0].id;
                        const price = hadOrder[0].price;
                        const productGender = hadOrder[0].productGender;
                        const productName = hadOrder[0].productName;
                        const color = hadOrder[0].color;
                        const size = hadOrder[0].size;

                        productOnCart = [
                          {
                            backImage,
                            frontImage,
                            id,
                            price,
                            productGender,
                            productName,
                            total: hadOrder[0].total + 1,
                            deliveryDate,
                            color,
                            size,
                          },
                          ...uniqueProducts,
                        ];
                      } else {
                        const newDate = new Date();
                        const deliveryAt = `${newDate.getDate()}/${
                          newDate.getMonth() + 1
                        }/${newDate.getFullYear()}`;

                        const deliveryTo = `${newDate.getDate() + 2}/${
                          newDate.getMonth() + 1
                        }/${newDate.getFullYear()}`;

                        const deliveryDate = `${deliveryAt} - ${deliveryTo}`;

                        shoes.deliveryDate = deliveryDate;

                        shoes.total = 1;
                        productOnCart = [shoes, ...uniqueProducts];
                      }

                      const stateStatusTrue = productOnCart.map((product) => {
                        if (product === false) return (product = true);
                        return product;
                      });
                      return stateStatusTrue;
                      //End
                    } else {
                      const newDate = new Date();
                      const deliveryAt = `${newDate.getDate()}/${
                        newDate.getMonth() + 1
                      }/${newDate.getFullYear()}`;

                      const deliveryTo = `${newDate.getDate() + 2}/${
                        newDate.getMonth() + 1
                      }/${newDate.getFullYear()}`;

                      const deliveryDate = `${deliveryAt} - ${deliveryTo}`;

                      shoes.deliveryDate = deliveryDate;
                      shoes.total = 1;
                      return [shoes, true];
                    }
                  });
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Shoes;
