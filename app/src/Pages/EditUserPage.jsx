import React from "react";
import styles from "./userpage.module.css"

export default function EditUserPage({ userData }) {
  return (
    <div>
      <form action="" method="post" className={styles.container}>
        <label htmlFor="">FirstName:</label>
        <input type="text" value={userData.name} />
        <label htmlFor="">LastName:</label>
        <input type="text" value={userData.name} />
        <label htmlFor="">Email:</label>
        <input type="email" value={userData.email} />
        <label htmlFor="">Department:</label>
        <input type="text" value={userData.company.name} />
        <button type="submit">Update</button>
        <button>Cancel</button>
      </form>
    </div>
  );
}
