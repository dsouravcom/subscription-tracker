import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/common/Sidebar";
import { AuthContext } from "../context/userContext";

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div>
          <div className="bg-slate-700 p-4">
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
