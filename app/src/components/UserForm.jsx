import React from "react";
// import Modal from "react-modal";
import AddUserPage from "../Pages/AddUserPage";
import EditUserPage from "../Pages/EditUserPage";

export default function UserForm({ userData }) {
  return <div>{userData ? <EditUserPage userData={userData} /> : <AddUserPage />}</div>;
}
