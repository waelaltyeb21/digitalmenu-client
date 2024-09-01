const CartCard = ({
  order,
  lang,
  increaseQuantity,
  decreaseQuantity,
  deleteOrder,
}) => {
  return (
    <div className="CartCard relative flex justify-between items-center bg-slate-200 dark:bg-slate-800 dark:text-slate-200 rounded-md outline-2 outline-slate-500 outline-dashed mx-4 mt-6 p-2">
      <div
        onClick={() => deleteOrder(order._id)}
        className="delete flex justify-center items-center absolute w-6 h-6 dark:*:text-slate-100 bg-slate-200 dark:bg-slate-800 rounded-full outline-dashed outline-2 outline-slate-400 dark:outline-slate-500 -top-3 rtl:-left-3 ltr:-right-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4"
        >
          <path
            fillRule="evenodd"
            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
            clipRule="evenodd"
          />
        </svg>
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
        <div className="quantity flex justify-center items-center bg-slate-300 dark:bg-slate-500 rounded-xl overflow-hidden font-semibold">
          <button
            onClick={() => decreaseQuantity(order)}
            className="bg-slate-800 dark:bg-slate-700 text-slate-100 rounded-xl w-6 h-6 flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <span className="px-2">{order.quantity}</span>
          <button
            onClick={() => increaseQuantity(order)}
            className="bg-slate-800 dark:bg-slate-700 text-slate-100 rounded-xl w-6 h-6 flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
