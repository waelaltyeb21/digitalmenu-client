import { useContext } from "react";
import { useNavigate } from "react-router";
import { Lang } from "../../Context/LangApi";
import Button from "../Button/Button";

const GreetingsMessage = ({ data }) => {
  const { lang, switchLanguage } = useContext(Lang);
  const navigate = useNavigate();
  return (
    <section className="GreetingsMessage h-dvh w-full flex flex-col justify-center items-center text-center">
      <h1>
        {lang == "ar" ? data.restaurant.name.ar : data.restaurant.name.en}
      </h1>
      <h1>Table No.{data?.table?.tableID}</h1>
      <div onClick={switchLanguage}>
        <Button
          text={lang == "ar" ? "تغيير اللغة" : "Switch Language"}
        ></Button>
      </div>
      <Button
        linkTo="/orders"
        text={lang == "ar" ? "عرض المنيو" : "Go To Orders"}
      />
    </section>
  );
};

export default GreetingsMessage;
