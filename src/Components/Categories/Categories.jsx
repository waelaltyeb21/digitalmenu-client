import { useContext, useRef, useState } from "react";
import DishList from "../DishList/DishList";
import { Lang } from "../../Context/LangApi";
import NavBar from "../NavBar/NavBar";

const Categories = ({ data }) => {
  const { lang } = useContext(Lang);
  const categories = useRef();
  const [cateName, setCateName] = useState(lang == "ar" ? "الكل" : "All");
  const [dishes, setDishes] = useState(null);
  const selectCategory = (category, event) => {
    if (cateName == category.name.ar || cateName == category.name.en) {
      console.log("Great No Rerender Againg !!");
      return;
    }
    setCateName(lang == "ar" ? category.name.ar : category.name.en);
    console.log(cateName);
    document.querySelectorAll(".Categories .category").forEach((child) => {
      child.classList.remove("selected");
    });
    event.target.classList.add("selected");
    // ----------------------------------------------
    if (category.name.en != "all") {
      const dishes = data.dishes.filter(
        (CategoriesedDishes) => CategoriesedDishes.category == category._id
      );
      setDishes(dishes);
    } else {
      setDishes(data.dishes);
    }
    console.log(category);
    // ----------------------------------------------
  };
  return (
    <section>
      <div className="fixed top-0 w-full bg-slate-50 z-50">
        {/* <NavBar /> */}
        {/* -------------------------------------------------- */}
        <div
          className="Categories flex items-center py-4 *:mx-2 overflow-x-auto whitespace-nowrap bg-slate-50 border-b-2 border-dashed border-b-slate-400 shadow-md shadow-slate-300 capitalize"
          ref={categories}
        >
          <div
            onClick={(event) =>
              selectCategory({ name: { ar: "الكل", en: "all" } }, event)
            }
            className="category selected bg-slate-500"
          >
            {lang == "ar" ? "الكل" : "All"}
          </div>
          {data.categories.map((category) => (
            <div
              id={category._id}
              className="category bg-slate-500"
              onClick={(event) => selectCategory(category, event)}
              key={category._id}
            >
              {lang == "ar" ? category.name.ar : category.name.en}
            </div>
          ))}
        </div>
      </div>
      {/* -------------------------------------------------- */}
      {dishes != null ? (
        <DishList dishes={dishes} lang={lang} cateName={cateName} />
      ) : (
        <DishList dishes={data.dishes} lang={lang} cateName={cateName} />
      )}
      {/* -------------------------------------------------- */}
    </section>
  );
};

export default Categories;
