import React from 'react';
import { translate, Trans } from "react-i18next";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <Body />
      <Footer />
      </div>
    );
  }
};

export default translate("translations")(App);