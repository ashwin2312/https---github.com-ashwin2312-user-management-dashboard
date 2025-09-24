import React from 'react'
import UserTable from '../components/UserTable'
import FilterPopUp from '../components/FilterPopUp'

export default function UserPage() {
    
  return (
    <div className='flex ' >
        <FilterPopUp />
        <UserTable />
    </div>
  )
}
