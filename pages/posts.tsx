import React from "react";
import ThemeProvider from "@mui/system";

import Article from "../components/Blog/Artcile/Article";
import Footer from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import theme from "../theme/theme";

const posts = () => {
  return (
    <>
      <Header />
      <Article />
      <Footer />
    </>
  );
};

export default posts;
