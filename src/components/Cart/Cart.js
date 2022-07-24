import React from "react";

import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

function Cart() {
  const cartitems = (
    <ul className={styles["cart-items"]}>
      {[
        {
          idL: "c1",
          name: "Sushi",
          amount: "2",
          price: "12.99",
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartitems}
      <div className={styles.total}>
        <span>Totla Amount</span>
        <span>35.55</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Close</button>
        <button className={styles["button"]}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
