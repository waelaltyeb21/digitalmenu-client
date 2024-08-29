import { useContext } from "react";
import { Lang } from "../../Context/LangApi";

const NavBar = () => {
  const { lang, switchLanguage } = useContext(Lang);
  return (
    <div className="NavBar py-4 px-2 flex justify-between items-center">
      <button className="bg-green-400 text-slate-100 p-1 px-2 rounded-md" onClick={switchLanguage}>
        {lang == "ar" ? "English" : "العربية"}
      </button>
      <div className="logo">
        <h1 className="text-center text-3xl font-semibold">La Taste</h1>
      </div>
    </div>
  );
};

export default NavBar;
