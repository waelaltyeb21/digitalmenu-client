import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const OrdApi = createContext(null);

const OrdersApi = ({ children }) => {
  const [FetchedData, setFetchedData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  // Check If Order Exist Or Not
  const orderExist = (id) => {
    const target = orders.find((order) => order._id == id);
    if (target) return true;
    return false;
  };
  // Add Order
  const createOrder = (order) => {
    const newOrder = { ...order, quantity: 1 };
    if (!orderExist(order._id)) {
      // Total Price
      setTotal((prv) => prv + order.price);
      setOrders([...orders, newOrder]);
      // toast.success("تم اضافة الطلب الى السلة");
    } else {
      // increaseQuantity(newOrder);
      toast.error("هذا الطلب موجود بالفعل");
    }
  };
  // Order Component
  const printOrders = () => {
    if (orders.length == 0) toast.error("ليس هنالك اي طلبات لطباعتها");
    else {
      console.log(orders);
      window.print();
    }
  };
  // Remove Order
  const deleteOrder = (id) => {
    console.log(id);
    // Delete Order => order._id
    // Filter Data And Return All Orders Except Target Order
    const newOrders = orders.filter((order) => {
      if (order._id == id)
        setTotal((prv) => prv - order.price * order.quantity);
      return order._id != id;
    });
    // Set Data After Update
    setOrders(newOrders);
    // Success Message
    // toast.success("تم حذف الطلب");
  };
  // Increase Quantity
  const increaseQuantity = (targetOrder) => {
    // // Check If Not Exist
    // if (orderExist(!targetOrder.id)) {
    //   createOrder(targetOrder);
    // }
    // Increase Quantity
    let nums = targetOrder.quantity + 1;
    // Filter Orders
    const newOrders = orders.map((order) => {
      if (order._id == targetOrder._id) {
        // Total Price
        setTotal((prv) => prv + order.price);
        return { ...order, quantity: nums };
      }
      return order;
    });
    // Set Orders After Update
    setOrders(newOrders);
  };
  // Decrease Quantity
  const decreaseQuantity = (targetOrder) => {
    if (targetOrder.quantity != 1) {
      // Decrease Quantity
      let nums = targetOrder.quantity - 1;
      // Filter Orders
      const newOrders = orders.map((order) => {
        if (order._id == targetOrder._id) {
          // Total Price
          setTotal((prv) => prv - order.price);
          return { ...order, quantity: nums };
        }
        return order;
      });
      // Set Orders After Update
      setOrders(newOrders);
    }
  };
  // Remove All Orders
  const clearOrders = () => {
    if (orders.length == 0) toast.error("ليس هنالك اي طلبات لحذفها");
    else {
      setTotal(0);
      setOrders([]);
      // toast.error("تم حذف كل الطلبات !");
    }
  };
  // Pass All Functions
  const funs = {
    FetchedData,
    setFetchedData,
    orders,
    setOrders,
    createOrder,
    increaseQuantity,
    decreaseQuantity,
    printOrders,
    clearOrders,
    deleteOrder,
    total,
  };
  return <OrdApi.Provider value={funs}>{children}</OrdApi.Provider>;
};

export default OrdersApi;
