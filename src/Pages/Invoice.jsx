import { useContext, useRef, useState } from "react";
import { OrdApi } from "../Context/OrdersApi";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { Lang } from "../Context/LangApi";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";
import NoDataFetched from "../Components/ErrorMessage/NoDataFetched";
const Invoice = () => {
  const { FetchedData: data, orders, total, clearOrders } = useContext(OrdApi);
  const { lang, switchLanguage } = useContext(Lang);
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
  if (orders.length == 0) return <NoDataFetched />;
  return (
    <section className="font-medium px-1 bg-yellow-100/25 dark:bg-slate-800 dark:text-slate-200 min-h-dvh pt-2">
      {/* ---------------------------------------------------- */}
      <div onClick={saveInvoice} className="w-full">
        <Button
          btnStyle="w-full mx-auto mb-4 px-4 bg-slate-900"
          text={lang == "ar" ? "حفظ الفاتورة" : "Save Invoice"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4"
          >
            <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
            <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
          </svg>
        </Button>
      </div>
      {/* ---------------------------------------------------- */}
      <div
        className="invoice pb-4 dark:bg-slate-800 dark:text-slate-200"
        ref={invoiceRef}
      >
        <div className="heading mb-4 mx-2">
          <h1 className="text-3xl text-center font-bold">
            {lang == "ar" ? "الفاتورة" : "Invoice"}
          </h1>
          <div className="mt-2">
            <h1 className="text-center text-xl">
              {data?.restaurant?.name?.en}
            </h1>
            <span className="block text-center">{time.toLocaleString()}</span>
          </div>
        </div>
        {/* ---------------------------------------------------- */}
        <table className="rounded-sm overflow-hidden table table-fixed w-full mb-5">
          <thead className="bg-slate-700 dark:bg-slate-500 text-slate-100">
            <tr className="*:p-2">
              <td colSpan={3}>{lang == "ar" ? "الصنف" : "Order"}</td>
              <td>{lang == "ar" ? "الكمية" : "Q.Y"}</td>
              <td>{lang == "ar" ? "الاجمالي" : "Total"}</td>
            </tr>
          </thead>
          <tbody className="">
            {/* هوت دوق بالجبنة الفرنسية */}
            {orders.map((order) => (
              <tr
                className="even:bg-slate-300 dark:even:bg-slate-300 even:text-slate-950 dark:odd:bg-slate-700 *:py-2 *:px-1"
                key={order._id}
              >
                <td className="" colSpan={3}>
                  {lang == "ar" ? order.name.ar : order.name.en}
                </td>
                <td className="text-center">{order.quantity}</td>
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
        {/* ---------------------------------------------------- */}
        <div className="message my-4">
            <h1 className="text-center text-lg">
              {/* <q> المقصد شوفتك والعذر قهوة </q> */}
              " المقصد شوفتك والعذر قهوة  "
            </h1>
          </div>
      </div>
      {/* ---------------------------------------------------- */}
      <div className="btns flex flex-col justify-between items-center">
        {/* <div onClick={saveInvoice}>
          <Button
            btnStyle="mx-auto my-4 px-4"
            text={lang == "ar" ? "حفظ الفاتورة" : "Save Invoice"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
              <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
            </svg>
          </Button>
        </div> */}
        <div className="flex justify-between items-center w-[90vw] gap-2">
          <div className="w-full" onClick={switchLanguage}>
            <Button
              text={lang == "ar" ? "English" : "العربية"}
              btnStyle={"px-4 w-full bg-slate-700 dark:bg-slate-700"}
            />
          </div>
          <div
            className="w-full"
            onClick={() => navigate("/cart", { replace: true })}
          >
            <Button
              text={lang == "ar" ? "عودة" : "Back"}
              btnStyle={"px-4 w-full bg-slate-700 dark:bg-slate-700"}
            />
          </div>
        </div>
        <div className="w-[90vw] my-2" onClick={complated}>
          <Button
            text={lang == "ar" ? "اكتمال" : "Complate"}
            btnStyle={"px-4 w-full bg-slate-800 dark:bg-slate-900"}
          />
        </div>
      </div>
      {/* ---------------------------------------------------- */}
    </section>
  );
};

export default Invoice;
