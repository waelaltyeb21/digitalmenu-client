import React, { createContext, useEffect, useState } from "react";

export const Lang = createContext(null);

const LangApi = ({ children }) => {
  const [lang, setLang] = useState(navigator.languages[1]);
  useEffect(() => {
    if (lang == "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
    document.documentElement.lang = lang;
  }, [lang]);
  const switchLanguage = () => {
    setLang((prv) => (prv == "ar" ? "en" : "ar"));
  };
  const values = { lang, switchLanguage };
  return <Lang.Provider value={values}>{children}</Lang.Provider>;
};

export default LangApi;
