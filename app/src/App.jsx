import React from "react";
import UserTable from "./components/UserTable";
import UserPage from "./Pages/UserPage";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>User Management Dashboard</h1>
      <button>Add user</button>
      <hr />
      <UserPage />
    </div>
  );
}
