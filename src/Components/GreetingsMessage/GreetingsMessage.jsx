import { useContext } from "react";
import { Lang } from "../../Context/LangApi";
import Button from "../Button/Button";

const GreetingsMessage = ({ data }) => {
  const { lang, switchLanguage } = useContext(Lang);
  return (
    <section className="GreetingsMessage relative min-h-dvh max-h-dvh w-full flex flex-col justify-evenly items-center text-center capitalize text-slate-800 dark:text-slate-100">
      <div className="flex flex-col justify-center items-center">
        {/* <h1>
          {lang == "ar" ? data.restaurant.name.ar : data.restaurant.name.en}
        </h1>
        <h1>Table No.{data?.table?.tableID}</h1> */}
        <div onClick={switchLanguage} className="mb-4">
          <Button
            text={lang == "ar" ? "English" : "العربية"}
            btnStyle={"min-w-32"}
          />
        </div>
        <Button
          linkTo="/orders"
          text={lang == "ar" ? "عرض المنيو" : "Menu"}
          btnStyle={"min-w-32"}
        />
        <Button
          linkTo="/tracking"
          text={lang == "ar" ? "الطلبات" : "Place Orders"}
          btnStyle={"min-w-32 mt-4"}
        />
      </div>
    </section>
  );
};

export default GreetingsMessage;
