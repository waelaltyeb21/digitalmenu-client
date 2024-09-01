import { useContext } from "react";
import DishCard from "../DishCard/DishCard";
import OverlayButton from "../OverlayButton/OverlayButton";
import { OrdApi } from "../../Context/OrdersApi";
import Button from "../Button/Button";

const DishList = ({ dishes, lang }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(OrdApi);
  const notAvailableDishes = dishes.filter((dish) => !dish.active);
  return (
    <div className="DishList relative py-28 mt-10 capitalize dark:bg-slate-800 min-h-dvh">
      <div className="list grid lg:grid-cols-3 md:grid-cols-2">
        {dishes != 0 ? (
          dishes.map((dish) =>
            dish.active ? (
              <DishCard
                dish={dish}
                lang={lang}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                key={dish._id}
              />
            ) : null
          )
        ) : (
          <h1 className="text-center text-2xl font-semibold dark:text-slate-200 mt-10 px-4">
            {lang == "ar"
              ? "لا توجد اطباق في هذا القسم"
              : "No Dishes In This Category"}
          </h1>
        )}
      </div>
      {/* -------------------------------------------------- */}
      {/* -------------------------------------------------- */}
      {notAvailableDishes.length != 0 ? (
        <div className="">
          <header className="my-8 pb-4 px-2 border-b-2 border-dashed border-slate-900 dark:border-slate-300">
            <h1 className="text-2xl dark:text-slate-100 font-semibold">
              {lang == "ar"
                ? "الاطباق الغير متوفرة حاليا"
                : "Not Available Dishes"}
            </h1>
          </header>
          <div className="list grid lg:grid-cols-3 md:grid-cols-2">
            {dishes.map((dish) =>
              dish.active ? null : (
                <DishCard dish={dish} lang={lang} key={dish._id} />
              )
            )}
          </div>
        </div>
      ) : null}
      {/* -------------------------------------------------- */}
      <OverlayButton>
        <Button
          linkTo="/cart"
          text={lang == "ar" ? "عرض الطلبات" : "Cart List"}
          btnStyle={"w-full mx-auto bg-slate-800 text-xl"}
        />
      </OverlayButton>
    </div>
  );
};

export default DishList;
