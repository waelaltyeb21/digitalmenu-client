const CartCard = ({
  order,
  lang,
  increaseQuantity,
  decreaseQuantity,
  deleteOrder,
}) => {
  return (
    <div className="CartCard relative flex justify-between items-center bg-slate-200 rounded-md outline-2 outline-slate-500 outline-dashed mx-4 mb-4 p-2">
      <div
        onClick={() => deleteOrder(order._id)}
        className="delete flex justify-center items-center absolute w-6 h-6 bg-slate-200 rounded-full outline-dashed outline-2 -top-3 rtl:-left-3 ltr:-right-3"
      >
        -
      </div>
      <div className="heading">
        <h1 className="text-2xl font-medium">
          {lang == "ar" ? order.name.ar : order.name.en}
        </h1>
        <span className="font-semibold text-xl">{order.price}</span>
      </div>
      <div className="footing">
        <div className="font-semibold text-xl text-center">
          {order.price * order.quantity}
        </div>
        <div className="quantity flex  justify-center items-center bg-slate-300 rounded-md overflow-hidden">
          <button
            onClick={() => decreaseQuantity(order)}
            className="px-2 bg-slate-800 text-slate-100 rounded-md w-6 h-6 flex justify-center items-center"
          >
            -
          </button>
          <span className="px-2">{order.quantity}</span>
          <button
            onClick={() => increaseQuantity(order)}
            className="px-2 bg-slate-800 text-slate-100 rounded-md w-6 h-6 flex justify-center items-center"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
