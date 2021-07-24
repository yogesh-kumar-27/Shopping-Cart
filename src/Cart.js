import React from "react";

import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return <h1 className="text-center text-primary">Your Cart Empty</h1>;
  return (
    <>
      <section className="py-4 container">
        <div className="row justify-contend-center">
          <div className="col-12">
            <h4>
              Cart ({totalUniqueItems}) total item: ({totalItems}){" "}
            </h4>
            <table className="table table-light table-hover m-0">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img src={item.img} style={{ height: "6rem" }} />{" "}
                      </td>
                      <td>{item.title}</td>
                      <td>$ {item.price}</td>
                      <td>Quantity {item.quantity}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-info"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-auto ms-auto">
            <h2>Total Price: {cartTotal} </h2>
          </div>
          <div className="col-auto">
            <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
              Clear Cart
            </button>
            <button className="btn btn-info">Pay Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
