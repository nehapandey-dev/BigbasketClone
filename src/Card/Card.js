import React from "react";
import Card from "react-bootstrap/Card";
import "./Card.css";
import { BsTruck, BsFillBasketFill } from "react-icons/bs";
import { useCart } from "react-use-cart";

const Cards = (props) => {
  const { addItem } = useCart();

  return (
    <section >
      <div className="cards">
        <Card style={{ width: "16rem" }}>
          <Card.Text className="card-offer">
            GET 38% OFF{" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAXrDh3lVNnUFVxm60YFyukjgY1lCZNWIVzGPyHPIaJp7WX0PYvLG6FL7GRgRubsQ-bsU&usqp=CAU"
              alt="img"
              width={16}
            />
          </Card.Text>

          <Card.Img variant="top" src={props.img} className="card-img" alt="img" />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVCSvMAuCzAP6GW_zsITvGIXdK7QXyNcFwg&usqp=CAU"
            alt="img"
            width={30}
            className='veg'
          />
          <ul>
            <li>{props.id}</li>
            <li className="name">{props.name}</li>
            <li>{props.category}</li>
            <li>
              {props.quantity} Rs {props.price}.00/-
            </li>
          </ul>
          <ul className="body">
            <li className="timing">
              <BsTruck /> Standard Delivery : Tomorrow
            </li>
            <li className="timing">9:00AM - 1:30PM</li>
            <div>
              QTY
              <input placeholder="1" className="quantity-box"></input>
              <button className="add-btn" onClick={() => addItem(props.data)}>
                ADD <BsFillBasketFill />
              </button>
            </div>
          </ul>

        </Card>
      </div>
    </section>
  );
}

export default Cards;
