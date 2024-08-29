import { useContext } from "react";
import { OrdApi } from "../../Context/OrdersApi";
import Button from "../Button/Button";

const OverlayButton = ({ linkTo, text, style }) => {
  const { orders } = useContext(OrdApi);
  return (
    <div
      className={`CartOverlayButton fixed bottom-0 w-full bg-slate-50 shadow-md p-3 ${
        orders.length == 0 ? "translate-y-32" : "translate-y-0"
      } transition-all duration-300 ease-in-out`}
    >
      <Button linkTo={linkTo} text={text} btnStyle={style} />
    </div>
  );
};

export default OverlayButton;
