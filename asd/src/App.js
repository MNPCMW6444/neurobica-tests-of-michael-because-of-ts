import React from "react";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import My from "./My";

function App() {
  const items = [
    <SidebarItem>Dashboard</SidebarItem>,
    <SidebarItem>Profile</SidebarItem>,
    <SidebarItem>Settings</SidebarItem>,
  ];

  return (
    <div className="App">
      <Sidebar content={items}>
        <My />
      </Sidebar>
    </div>
  );
}

export default App;
