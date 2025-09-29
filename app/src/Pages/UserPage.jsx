import React from 'react'
import UserTable from '../components/UserTable'
import FilterPopUp from '../components/FilterPopUp'
import Pagination from '../components/Pagination'

export default function UserPage({addClick}) {
    
  return (
    <div className='flex ' >
        <FilterPopUp />
        <UserTable addClick={addClick} />
        {/* <Pagination /> */}
    </div>
  )
}
