import { useContext } from "react";
import DishCard from "../DishCard/DishCard";
import OverlayButton from "../OverlayButton/OverlayButton";
import { OrdApi } from "../../Context/OrdersApi";

const DishList = ({ dishes, lang }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(OrdApi);
  return (
    <div className="DishList relative my-28 capitalize">
      <div className="list grid lg:grid-cols-3 md:grid-cols-2">
        {dishes != 0 ? (
          dishes.map((dish) => (
            <DishCard
              dish={dish}
              lang={lang}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              key={dish._id}
            />
          ))
        ) : (
          <h1 className="text-center text-2xl font-semibold">No Data Found On This Category!</h1>
        )}
      </div>
      {/* -------------------------------------------------- */}
      {/* <header className="my-8 pb-4 px-2 border-b-2 border-dashed border-slate-900">
        <h1 className="text-2xl">الاطباق الغير متوفرة حاليا</h1>
      </header> */}
      {/* -------------------------------------------------- */}
      {/* <div className="list grid lg:grid-cols-3 md:grid-cols-2">
        {list.map((li) => (!li.active ? <DishCard li={li} key={li} /> : null))}
      </div> */}
      <OverlayButton linkTo="/cart" text={lang == "ar" ? "عرض الطلبات" : "Cart List"} style={"w-full mx-auto bg-slate-800 text-xl"} />
    </div>
  );
};

export default DishList;
