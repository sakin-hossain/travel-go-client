import React, { useState } from "react";
import AddPackages from "../AddPackages/AddPackages";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import "./AdminDashBoard.css";

const AdminDashBoard = () => {
  const [control, setControl] = useState("manageOrders");

  console.log(control);
  return (
    <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container">
            <div className="col-md-2 mt-5">
              <div className="sidebar__container">
                <ul>
                  <li
                    onClick={() => setControl("manageOrders")}
                    className="admin-menu p-2"
                  >
                    Manage Orders
                  </li>
                  <li
                    onClick={() => setControl("addPackages")}
                    className="admin-menu p-2"
                  >
                    Add Packages
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-10 text-center  text-center">
              {control === "addPackages" && <AddPackages></AddPackages>}
              {control === "manageOrders" && <ManageAllOrders></ManageAllOrders>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;