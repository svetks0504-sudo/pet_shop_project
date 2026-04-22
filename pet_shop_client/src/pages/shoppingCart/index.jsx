import { useEffect, useState } from "react";
import {
  addToCart,
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
import CountInput from '../../components/countInput'

const BASE_URL = "http://localhost:3333";

function ShoppingCart() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { success, error, message, loading } = useSelector(
    (state) => state.post,
  );
  const [count, setCount] = useState(1);
   console.log(count)
  return (
    <div className={styles.shoppingContainer}>
      <DividerHome title={"Shopping cart"} all={"Back to the store"} />
      <Flex style={{ gap: "2vw", justifyContent: "space-between" }}>
        <div className={styles.containercard}>
          {cart.map((item) => {
            return (
              <Card
                key={item.id}
                style={{ width: "100%", position: "relative" }}
              >
                <Flex>
                  <img src={`${BASE_URL}/${item?.image}`}
                    alt={item?.title}
                    className={styles.imgCard}
                  />
                  <div>
                  <p >{item?.title}</p>
                  <Flex style={{gap: "8rem"}}>
                      <CountInput
              max={15}
              count={count}
              /*isBlock={isAdded}*/
              setCount={setCount}
            />
          
            <h3>${item?.discont_price}</h3>
                  </Flex>
                  </div>
                </Flex>
              </Card>
            );
          })}
        </div>
        <Card
          style={{
            backgroundColor: "rgba(241, 243, 244, 1)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h3>Order details</h3>
          <h3 className={styles.greyText}></h3>
          <Flex>
            <h3 className={styles.greyText}>{}</h3>
            <h2>${}</h2>
          </Flex>
          <UniversalForm
            onSubmit={(data) => {
              dispatch(sendOrder(data));
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
