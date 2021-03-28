import React from "react";
import SideBarSelect from "./SideBarSelect";

export interface SideBarProps {}

const data: [] = [];

const SideBar: React.FC<SideBarProps> = () => {
  const handleCreateNew = () => {};
  return (
    <>
      <SideBarSelect
        title="channels"
        elements={data}
        onCreateNew={handleCreateNew}
      />
      <SideBarSelect
        title="Direct messages"
        elements={data}
        onCreateNew={handleCreateNew}
      />
    </>
  );
};

export default SideBar;
