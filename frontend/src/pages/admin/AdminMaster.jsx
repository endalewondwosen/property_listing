import React from "react";
import { AdmnHeader } from "./AdminHeader";
import { AdmnSidebar } from "./AdmnSidebar";
import { Outlet } from "react-router-dom";

export const AdminMaster = () => {
  return (
    < >
<AdmnHeader />
<Outlet />
<AdmnSidebar />

    </ >
  )
}
