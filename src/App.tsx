import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import NavItemBase from "./components/NavItem";
import { navDetails } from "./constants/navigation";
import { PlusIcon, MenuIcon } from "@heroicons/react/outline";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout left={<Navigation />} main={<div />} right={<div />} />
      </div>
    </BrowserRouter>
  );
}

const Navigation = () => {
  return (
    <div className="w-[280px] bg-[#f2f2f2] outline-2 outline h-full flex flex-col ">
      <div className="px-4">
        <MenuIcon className="w-6 h-6 " />
      </div>
      <nav>
        <ul className="flex flex-col gap-2">
          {navDetails.map(({ label, icon, color }) => {
            return <NavItemBase key={label} {...{ label, icon, color }} />;
          })}
        </ul>
      </nav>
      <hr className="border-2 bg-black" />
      <div className="flex-1">
        <NavItemBase label="New list" icon={PlusIcon} />
      </div>
      <hr className="border-2 bg-black" />
      <div>
        <NavItemBase label="New list" icon={PlusIcon} />
      </div>
    </div>
  );
};

export default App;
