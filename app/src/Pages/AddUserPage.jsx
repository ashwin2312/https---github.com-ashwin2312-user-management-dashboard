import React from 'react'
import styles from "./userpage.module.css"

export default function AddUserPage() {
  return (
    <div>
         <form action="" method="post" className={styles.container}>
            <label htmlFor="">FirstName:</label>
            <input type="text" />
            <label htmlFor="">LastName:</label>
            <input type="text" />
            <label htmlFor="">Email:</label>
            <input type="email" />
            <label htmlFor="">Department:</label>
            <input type="text" />
            <button type="submit">Add User</button>
            <button>Cancel</button>
        </form>
    </div>
  )
}
