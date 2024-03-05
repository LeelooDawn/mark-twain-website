import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Showinfo from "./components/Showinfo";
import Ticketinfo from "./components/Ticketinfo";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Showinfo />
      <Ticketinfo />
    </>
  );
}

export default App;
