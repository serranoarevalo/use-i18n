import React from "react";
import { useTranslation } from "./context";

const Header = () => {
  const t = useTranslation();
  return (
    <>
      <span>{t("Create Account")}</span> | <span>{t("Sign In")}</span>
    </>
  );
};

export default Header;
