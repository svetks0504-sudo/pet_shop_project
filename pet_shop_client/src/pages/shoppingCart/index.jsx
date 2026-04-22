import { useEffect, useState } from "react";
import {
  removeFromCart,
  clearCart,
  updateQuantity,
} from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import DividerHome from "../../components/dividerHome";
import styles from "./styles.module.css";
import { Card, Flex } from "antd";
import { sendOrder, resetState } from "../../redux/slices/postSlice";
import UniversalForm from "../../components/universalForm";
import BtnCard from "../../components/btnCard";
import CountInput from "../../components/countInput";
import { CloseOutlined } from "@ant-design/icons";
import EmpatyData from "../../components/empatyData";

const BASE_URL = "http://localhost:3333";

function ShoppingCart() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { success, error, message, loading } = useSelector(
    (state) => state.post,
  );

  const handleQuantityChange = (id) => (value) => {
    dispatch(
      updateQuantity({
        id,
        quantity: value,
      }),
    );
  };

  const totalPrice = cart.reduce((acc, item) => {
    const price = item.discont_price ?? item.price;
    return acc + price * item.quantity;
  }, 0);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const totalProductPrice = (id) => {
    const item = cart.find((i) => i.id === id);
    if (!item) return 0;
    const price = item.discont_price ?? item.price;

    return price * item.quantity;
  };

  console.log(cart);

  return (
    <div className={styles.shoppingContainer}>
      <DividerHome link={"/"} title={"Shopping cart"} all={"Back to the store"} />
      <Flex style={{ gap: "2vw", justifyContent: "space-between" }}>
        <div className={styles.containercard}>
          {cart.length === 0 ? (
            <EmpatyData />
          ) : (
            cart.map((item) => {
              return (
                <Card
                  key={item.id}
                  style={{
                    width: "51vw",
                    position: "relative",
                  }}
                  styles={{
                    body: { padding: 0 },
                  }}
                >
                  <Flex>
                    <img
                      src={`${BASE_URL}/${item?.image}`}
                      alt={item?.title}
                      className={styles.imgCard}
                    />
                    <div className={styles.containerClose}>
                      <CloseOutlined
                        style={{
                          position: "absolute",
                          right: "32px",
                          top: "32px",
                          width: "24px",
                        }}
                        onClick={() => dispatch(removeFromCart(item.id))}
                      />
                      <p>{item?.title}</p>
                      <Flex style={{ gap: "8rem" }}>
                        <CountInput
                          max={15}
                          count={item.quantity}
                          /*isBlock={isAdded}*/
                          setCount={handleQuantityChange(item.id)}
                        />

                        <h3>${totalProductPrice(item.id)}</h3>
                      </Flex>
                    </div>
                  </Flex>
                </Card>
              );
            })
          )}
        </div>

        <Card
          style={{
            backgroundColor: "rgba(241, 243, 244, 1)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h3>Order details</h3>
          <h3 className={styles.greyText}>{totalItems} items</h3>
          <Flex>
            <h3 className={styles.greyText}>{}</h3>
            <h2>${totalPrice}</h2>
          </Flex>
          <UniversalForm
            onSubmit={(data) => {
              dispatch(sendOrder(data));
              dispatch(clearCart());
            }}
            background={"rgba(241, 243, 244, 1)"}
            success={success}
            padding={"0"}
            loading={loading}
            resetSuccess={resetState}
            backgroundIn={"rgba(255, 255, 255, 1)"}
            color={"rgba(139, 139, 139, 1)"}
            colorPl={"rgba(139, 139, 139, 1)"}
          >
            <BtnCard
              titleBtn={
                loading ? "Sending..." : success ? "Request Submitted" : "Order"
              }
              onClick={onclick}
              isBlock={loading}
              htmlType={"submit"}
              widthBtn={"100%"}
            />
          </UniversalForm>
        </Card>
      </Flex>
    </div>
  );
}

export default ShoppingCart;
