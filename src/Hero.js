import React from "react";
import { useTranslation } from "./context";

const Hero = () => {
  const t = useTranslation();
  return <h1>{t("Hello")}</h1>;
};
export default Hero;
