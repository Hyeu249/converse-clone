function ProductItem({ product, setIsBuy }) {
  return (
    <div className="product-itemCart">
      <img src={product.backImage} alt="" className="itemcart_image" />
      <div
        className="itemCart_info"
        style={{
          fontFamily: "proxima nova,proxima-nova,Helvetica,Arial,sans-serif",
          fontSize: "0.77rem",
          color: "gray",
          lineHeight: "1.4",
          fontWeight: "400",
        }}
      >
        <div
          style={{
            fontWeight: "700",
            fontSize: "0.93rem",
            textDecoration: "underline",
            color: "black",
          }}
        >
          {product.productName}
        </div>
        <div style={{ marginTop: "10px" }}>
          Color: <span style={{ color: "black" }}>{product.color}</span>
        </div>
        <div>
          Size: <span style={{ color: "black" }}>{product.size}</span>
        </div>
        <div>
          Qty : <span style={{ color: "black" }}>{product.total}</span>
        </div>
        <div>
          Estimated Delivery Date: <br />{" "}
          <span style={{ color: "black" }}>{product.deliveryDate}</span>
        </div>
        <div style={{ paddingTop: "15px", color: "black" }}>
          ${product.price * product.total}.00
        </div>
      </div>
      <div
        className="itemCart_X"
        onClick={() => {
          setIsBuy((state) => {
            const removedProduct = state.filter(
              (productState) => productState.id !== product.id
            );
            if (removedProduct.length === 1) {
              return [{}, false];
            } else {
              return removedProduct;
            }
          });
        }}
      >
        X
      </div>
    </div>
  );
}

export default ProductItem;
