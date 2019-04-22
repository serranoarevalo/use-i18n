import React, { createContext, useState, useContext } from "react";
import translations from "./translations";

const DEFAULT_LANGUAGE = "en";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(DEFAULT_LANGUAGE);
  const t = text => {
    if (lang === DEFAULT_LANGUAGE) {
      return text;
    } else {
      return translations[lang][text];
    }
  };
  return (
    <LanguageContext.Provider value={{ t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const { t } = useContext(LanguageContext);
  return t;
};

export const changeLang = () => {
  const { setLang } = useContext(LanguageContext);
  return setLang;
};

export default LanguageProvider;
