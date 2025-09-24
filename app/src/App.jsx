import React, { useState } from "react";
import UserTable from "./components/UserTable";
import UserPage from "./Pages/UserPage";
import "./App.css";
import Modal from "react-modal";
import UserForm from "./components/UserForm";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAdd = () => {
    console.log("Add user button clicked");
    setIsModalOpen(true);
  };
  return (
    <div>
      <h1>User Management Dashboard</h1>
      <button onClick={handleAdd}>Add user</button>
      <hr />
      <UserPage addClick={handleAdd} />
      <Modal
        isOpen={isModalOpen}
        style={customStyles}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <UserForm />
      </Modal>
    </div>
  );
}
