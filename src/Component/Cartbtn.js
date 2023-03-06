import React from "react";
import { BsBasketFill, BsTrashFill } from "react-icons/bs";
import { useCart } from "react-use-cart";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import CloseButton from "react-bootstrap/CloseButton";

const Cartbtn = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    isEmpty,
    items,
    totalItems,
    updateItemQuantity,
    cartTotal,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return (
      <>
        <div className="cart">
          <button className="me-3">
            <BsBasketFill /> My Basket 0 Item
          </button>
        </div>
      </>
    );
  return (
    <section>
      <div className="cart">
        <button variant="primary" onClick={handleShow} className="me-3">
          <BsBasketFill /> My Basket {totalItems} Item
        </button>
      </div>

      <Offcanvas show={show} placement={"end"} onHide={handleClose} {...props}>
        <Offcanvas.Body>
          <table className="table">
            <tbody>
              <CloseButton
                aria-label="Hide"
                variant="primary"
                onClick={handleClose}
              />

              {items.map((data, index) => {
                return (

                  <tr key={index}>

                    <td className="table-row">
                      <img
                        src={data.img}
                        style={{ height: "4rem" }}
                        alt="img"
                      />
                    </td>
                    <td className="table-row">
                      <b>{data.name}</b>
                    </td>
                    <td className="table-row">Rs {data.price}.00</td>

                    <td className="table-row">
                      <button
                        className="btn-box"
                        onClick={() =>
                          updateItemQuantity(data.id, data.quantity - 1)
                        }
                      >
                        -
                      </button>
                      {data.quantity}
                      <button
                        className="btn-box"
                        onClick={() =>
                          updateItemQuantity(data.id, data.quantity + 1)
                        }
                      >
                        +
                      </button>

                      <span
                        className="trash-bin"
                        onClick={() => removeItem(data.id)}
                      >
                        <BsTrashFill />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>


          <hr />
          <div>
            <h6>Sub Total : Rs {cartTotal}.00</h6>
            <h6>Delivery fee : Rs 30.00</h6>

            <h5>Total amout to pay : Rs {cartTotal + 30.0}</h5>
            <hr />
          </div>
          <div>
            <button className="Clear-btn" onClick={() => emptyCart()}>
              Clear Cart
            </button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </section>
  );
};

export default Cartbtn;
