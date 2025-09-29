import { useEffect, useState } from "react";
import { getUsers } from "../services/api";
import SearchBar from "./SearchBar";
import styles from "./usertable.module.css";
import UserForm from "./UserForm";
import Modal from "react-modal";
import Pagination from "./Pagination";

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

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState(null);
  const [order, setOrder] = useState("ASC");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUsersData = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
    };
    fetchUsersData();
  }, []);

  const getValue = (obj, path) =>
    path.split(".").reduce((val, key) => val?.[key], obj); // obj["company"]["name"]

  const sortOrder = (col) => {
    const sorted = [...users].sort((a, b) => {
      const valA = getValue(a, col); // a["company"]["name"]
      const valB = getValue(b, col); // b["company"]["name"]

      return typeof valA === "string"
        ? order === "ASC"
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA)
        : order === "ASC"
        ? valA - valB
        : valB - valA;
      // return order === "ASC" ? valA-valB : valB-valA;
    });

    setUsers(sorted);
    setOrder(order === "ASC" ? "DSC" : "ASC");
  };

  const handleEdit = (user) => {
    // console.log("Edit user details::", user);
    setUserData(user);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    // console.log("Delete user with id:", id);
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className={styles.tableContainer}>
      <SearchBar />
      {users.length>10?(<Pagination sortOrder={sortOrder} handleEdit={handleEdit} handleDelete={handleDelete} />):(<table>
        <thead>
          <tr>
            <th>
              <button onClick={() => sortOrder("id")}>ID </button>
            </th>
            <th>
              <button onClick={() => sortOrder("name")}>FirstName</button>
            </th>
            <th>
              <button onClick={() => sortOrder("name")}>LastName</button>
            </th>
            <th>
              <button onClick={() => sortOrder("email")}>Email</button>
            </th>
            <th>
              <button onClick={() => sortOrder("company.name")}>
                Department
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name.split(" ").slice(-2, -1)[0]}</td>
                <td>{user.name.split(" ").slice(-1)[0]}</td>
                <td>{user.email}</td>
                <td>{user.company.name}</td>
                <td>
                  <button onClick={() => handleEdit(user)}>Edit</button>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>)}
      
      
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          style={customStyles}
          onRequestClose={() => setIsModalOpen(false)}
        >
          <UserForm userData={userData} />
        </Modal>
      )}
    </div>
  );
}
