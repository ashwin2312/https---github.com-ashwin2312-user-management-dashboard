import React, { useState } from "react";
import styles from "./FilterPopUp.module.css";

export default function FilterPopUp() {
  const [filter, setFilter] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const handleFfilter = () => {
    console.log("Filter applied:", filter);
    alert("Filter applied. Check console for details.");
  };
  const handleReset = () => {
    setFilter({
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    });
  };

  return (
    <div className={styles.filterPopup}>
      <label htmlFor="">Firstname:</label>
      <input
        type="text"
        value={filter.firstName}
        onChange={(e) => setFilter({ ...filter, firstName: e.target.value })}
      />
      <label htmlFor="">Lastname:</label>
      <input
        type="text"
        value={filter.lastName}
        onChange={(e) => setFilter({ ...filter, lastName: e.target.value })}
      />
      <label htmlFor="">Email:</label>
      <input
        type="text"
        value={filter.email}
        onChange={(e) => setFilter({ ...filter, email: e.target.value })}
      />
      <label htmlFor="">Department:</label>
      <select
        name=""
        id=""
        value={filter.department}
        onChange={(e) => setFilter({ ...filter, department: e.target.value })}
      >
        <option value="">Select</option>
        <option value="">Select</option>
        <option value="">Select</option>
      </select>

      <div>
        <button onClick={handleFfilter}>Apply Filters</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
