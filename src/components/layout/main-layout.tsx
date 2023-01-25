import React from "react";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main> {children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
