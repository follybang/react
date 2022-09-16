import React from "react";

const ProductsList = ({ cartItems }) => {
  return (
    <div className="products">
      <ul className="products__list">
        {cartItems.map(({ id, name, price }) => (
          <li key={id} className="products__list-item">
            <span className="products__item-name">{name}</span>
            <span className="products__item-price">{`$${price}`}</span>
          </li>
        ))}
      </ul>
      <div className="products__total">{`Total: $${cartItems.reduce(
        (acc, cart) => acc + cart.price,
        0,
      )}`}</div>
    </div>
  );
};

export default ProductsList;
