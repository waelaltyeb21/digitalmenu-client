import React, { useContext, useRef, useState } from "react";
import { OrdApi } from "../Context/OrdersApi";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { Lang } from "../Context/LangApi";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";
const Invoice = () => {
  const { FetchedData: data, orders, total, clearOrders } = useContext(OrdApi);
  const { lang } = useContext(Lang);
  const [time] = useState(new Date());
  const navigate = useNavigate();
  const invoiceRef = useRef();
  const saveInvoice = () => {
    html2canvas(invoiceRef.current).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, "invoice.png");
      });
    });
  };
  const complated = () => {
    clearOrders();
    navigate("/orders");
  };
  return (
    <section className="font-medium px-1 bg-yellow-100/25 h-dvh">
      {/* ---------------------------------------------------- */}
      <div className="invoice py-20" ref={invoiceRef}>
        <div className="heading mb-8">
          <h1 className="text-3xl text-center font-bold">
            {lang == "ar" ? "الفاتورة" : "Invoice"}
          </h1>
          <div>{time.toLocaleString()}</div>
          <div className="message">
            <h1>لاروما من خيرات الطبيعة</h1>
            <h2>Table No.{data?.table?.tableID}</h2>
          </div>
        </div>
        {/* ---------------------------------------------------- */}
        <table className="list table table-fixed w-full">
          <thead className="bg-slate-700 text-slate-100">
            <tr className="*:p-2">
              <td colSpan={3}>{lang == "ar" ? "الصنف" : "Order"}</td>
              <td>{lang == "ar" ? "الكمية" : "Q.Y"}</td>
              {/* <td>القيمة</td> */}
              <td>{lang == "ar" ? "الاجمالي" : "Total"}</td>
            </tr>
          </thead>
          <tbody className="">
            {/* هوت دوق بالجبنة الفرنسية */}
            {orders.map((order) => (
              <tr className="even:bg-slate-300 *:py-2 *:px-1" key={order._id}>
                <td className="" colSpan={3}>
                  {lang == "ar" ? order.name.ar : order.name.en}
                </td>
                <td className="text-center">{order.quantity}</td>
                {/* <td className="text-center">{order.price}</td> */}
                <td className="orderPrice text-center">
                  {order.price * order.quantity}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td
                colSpan={5}
                className="text-center bg-slate-500 text-slate-50 p-2"
              >
                {total} <span>{lang == "ar" ? "ج.س" : "SDG"}</span>
              </td>
            </tr>
          </tfoot>
          {/* ---------------------------------------------------- */}
        </table>
      </div>
      {/* ---------------------------------------------------- */}
      <div className="btns flex justify-between items-center">
        <div onClick={saveInvoice}>
          <button className="block mx-auto my-4 bg-indigo-500 text-slate-100 p-2 rounded-md capitalize">
            {lang == "ar" ? "حفظ الفاتورة" : "Save Invoice"}
          </button>
        </div>
        <div onClick={complated}>
          <Button text={lang == "ar" ? "عرض المنيو" : "Menu"} />
        </div>
          <Button linkTo="/track_orders" text={lang == "ar" ? "الطلبات" : "Orders"} />
      </div>
      {/* ---------------------------------------------------- */}
    </section>
  );
};

export default Invoice;
