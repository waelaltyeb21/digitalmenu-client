import { useContext, useState } from "react";
import CartCard from "../CartCard/CartCard";
import { OrdApi } from "../../Context/OrdersApi";
import OverlayButton from "../OverlayButton/OverlayButton";
import { Lang } from "../../Context/LangApi";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const CartList = () => {
  const { orders, increaseQuantity, decreaseQuantity, deleteOrder } =
    useContext(OrdApi);
  const { lang } = useContext(Lang);
  return (
    <div className="Cart mb-32">
      <header className="my-4 flex justify-between items-center pb-4 px-2 border-b-2 border-dashed border-slate-900">
        <h1 className="text-3xl text-center">
          {lang == "ar" ? "الطلبات" : "Orders"}
        </h1>
        <Button
          linkTo={"/orders"}
          text={lang == "ar" ? "عودة" : "Back"}
          btnStyle={"bg-slate-500"}
        />
      </header>
      <div className="CartList grid lg:grid-cols-3 md:grid-cols-2">
        {orders.length == 0 ? (
          <div className="NoOrders mt-20 font-medium flex flex-col justify-center items-center">
            <h1 className="text-center text-2xl p-2 mb-4">
              {lang == "ar" ? "لا توجد طلبات" : "No Orders To Display"}
            </h1>
            <Button
              linkTo={"/orders"}
              text={lang == "ar" ? "عرض المنيو" : "Menu"}
            />
          </div>
        ) : (
          orders.map((order) => (
            <CartCard
              order={order}
              lang={lang}
              deleteOrder={deleteOrder}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              key={order._id}
            />
          ))
        )}
        {/* -------------------------------------------- */}
        <OverlayButton
          linkTo="/invoice"
          text={lang == "ar" ? "عرض الفاتورة" : "Invoice"}
          style={"w-full mx-auto bg-slate-800 text-xl"}
        />
      </div>
    </div>
  );
};

export default CartList;
