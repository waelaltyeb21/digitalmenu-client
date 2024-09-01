import { useContext, useRef } from "react";
import { OrdApi } from "../../Context/OrdersApi";

const DishCard = ({ dish, lang }) => {
  const dishRef = useRef();
  const { orders, createOrder, deleteOrder } = useContext(OrdApi);
  const OrderToggel = (order, event) => {
    if (
      event.target.textContent === "الغاء" ||
      event.target.textContent === "cancel"
    ) {
      deleteOrder(dish._id);
      dishRef.current.classList.remove("selected");
      event.target.textContent = lang == "ar" ? "اختيار" : "select";
    } else {
      createOrder(order);
      dishRef.current.classList.add("selected");
      event.target.textContent = lang == "ar" ? "الغاء" : "cancel";
    }
  };
  return (
    <div
      ref={dishRef}
      id={`dish${dish._id}`}
      className={`DishCard flex justify-between items-center shadow-md shadow-slate-300 dark:shadow-none dark:text-slate-200 mx-2 mb-4 p-2 rounded-md outline-2 outline-dashed outline-offset-2 outline-slate-500 dark:outline-slate-400 ${orders.find((order) => order._id == dish._id) ? "selected" : ""}`}
    >
      <div className="box1 mx-0.5">
        <h1 className="text-2xl font-medium">
          {lang == "ar" ? dish.name.ar : dish.name.en}
          {/* هوت دوق بالجبنة الفرنسية السودانية اللذيذة */}
        </h1>
        <span className={`${dish.active ? "hidden" : "block dark:text-slate-300"}`}>
          {lang == "ar" ? "غير متوفر حاليا *" : "Out Of Stack"}
        </span>
      </div>
      <div className={`box2 mx-0.5 text-center`}>
        <div className={`font-semibold text-xl`}>{dish.price}</div>
        {dish.active ? (
          <button
            onClick={(event) => OrderToggel(dish, event)}
            className="bg-slate-300 dark:text-slate-100 text-slate-800 dark:bg-slate-500 text-xl capitalize px-4 rounded"
          >
            {orders.find((order) => order._id == dish._id)
              ? lang == "ar"
                ? "الغاء"
                : "cancel"
              : lang == "ar"
              ? "اختيار"
              : "select"}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default DishCard;
