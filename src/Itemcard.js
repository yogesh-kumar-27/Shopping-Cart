import React from "react";
import { useCart } from "react-use-cart";

const Itemcard = (props) => {
  const { addItem } = useCart();
  // console.warn(props.item)

  return (
    <div className="col-12 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card shadow">
        <img src={props.img} className="card-img-top img-fluid" />
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <h4 className="card-text">{props.decs}</h4>
          <h5 className="card-title">$ {props.price}</h5>
          <button
            className="btn btn-success"
            onClick={() => addItem(props.item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Itemcard;
