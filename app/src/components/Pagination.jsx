import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./pagination.module.css";

export default function Pagination({ sortOrder, handleEdit, handleDelete }) {
  // const [limit, setLimit] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);
  // console.log("Current Items::", currentItems);
  const totalPages = Math.ceil(tableData.length / rowsPerPage);
  // console.log("Total Pages::", totalPages);

  // const dummyAPI = "https://dummyjson.com/users?limit=0";
  const usersAPI = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios
      .get(usersAPI)
      .then((res) => {
        // console.log(res.data);
        setTableData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage=>Math.max(currentPage - 1, 1));
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage=>Math.min(currentPage + 1, totalPages));
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <button onClick={() => sortOrder("id")}>ID</button>
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
          {currentItems &&
            currentItems.map((user) => (
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
      </table>
      <div className={styles.buttonContainer}>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={() => setRowsPerPage(1)}>10</button>
        <button onClick={() => setRowsPerPage(2)}>25</button>
        <button onClick={() => setRowsPerPage(5)}>50</button>
        <button onClick={() => setRowsPerPage(10)}>100</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
