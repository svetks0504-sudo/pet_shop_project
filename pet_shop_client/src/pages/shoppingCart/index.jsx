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
import { Link } from "react-router-dom";

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
  const path="/product/"

  console.log(cart);

  return (
    <div className={styles.shoppingContainer}>
      <DividerHome
        link={"/"}
        title={"Shopping cart"}
        all={"Back to the store"}
      />
      <Flex className={styles.flex}>
        <div className={styles.containercard}>
          {cart.length === 0 ? (
            <EmpatyData />
          ) : (
            cart.map((item) => {
              return (
                <Card className={styles.cardFlix}
                  key={item.id}
                  styles={{
                    body: { padding: 0 },
                  }}
                >
                  <Flex>
                    <Link to={`${path}/${item?.id}`}>
                    <img
                      src={`${BASE_URL}/${item?.image}`}
                      alt={item?.title}
                      className={styles.imgCard}
                    />
                    </Link>
                    <div className={styles.containerClose}>
                      <CloseOutlined
                        style={{
                          position: "absolute",
                          right: "8rem",
                          top: "8rem",
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

        <Card className={styles.containerWithForm}>
          <h3>Order details</h3>
          <h3 className={styles.greyText}>{totalItems} items</h3>
          <Flex style={{justifyContent: "space-between",
          paddingBottom: "2vw"}}>
            <h3 className={styles.greyText}>Total</h3>
            <h2 style={{alignSelf: "flex-end"}}
            >${totalPrice},00</h2>
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
