import { useContext } from "react";
import { OrdApi } from "../../Context/OrdersApi";

const OverlayButton = ({ children }) => {
  const { orders } = useContext(OrdApi);
  return (
    <div
      className={`CartOverlayButton flex justify-center items-center fixed bottom-0 w-full bg-slate-50 dark:bg-slate-900 shadow-md dark:shadow-none p-3 ${
        orders.length == 0 ? "translate-y-32" : "translate-y-0"
      } transition-all duration-300 ease-in-out`}
    >
      {children}
    </div>
  );
};

export default OverlayButton;
