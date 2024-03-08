import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Showinfo from "./components/Showinfo";
import Ticketinfo from "./components/Ticketinfo";
import Extrainfo from "./components/Extrainfo";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Header />
        <Showinfo />
        <Ticketinfo />
        <Extrainfo />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
