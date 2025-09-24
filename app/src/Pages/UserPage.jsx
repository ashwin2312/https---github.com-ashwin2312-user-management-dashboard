import React from 'react'
import UserTable from '../components/UserTable'
import FilterPopUp from '../components/FilterPopUp'

export default function UserPage({addClick}) {
    
  return (
    <div className='flex ' >
        <FilterPopUp />
        <UserTable addClick={addClick} />
    </div>
  )
}
