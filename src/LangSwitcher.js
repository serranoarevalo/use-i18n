import React from "react";
import { changeLang } from "./context";

const LangSwitcher = () => {
  const switchLang = changeLang();
  return (
    <>
      <button onClick={() => switchLang("es")}>Speak Spanish</button>
      <button onClick={() => switchLang("en")}>Speak English</button>
    </>
  );
};

export default LangSwitcher;
