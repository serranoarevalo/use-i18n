import React, { Component } from "react";
import LanguageProvider from "./context";
import Hero from "./Hero";
import LangSwitcher from "./LangSwitcher";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <LanguageProvider>
        <Header />
        <Hero />
        <LangSwitcher />
      </LanguageProvider>
    );
  }
}

export default App;
