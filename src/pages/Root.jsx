import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

function Root() {
    const category = [
        {
          "id": "1",
          "title": "bed"
        },
        {
          "id": "2",
          "title": "light"
        },
        {
          "id": "3",
          "title": "wall clock"
        },
        {
          "id": "4",
          "title": "mirror"
        },
        {
          "id": "5",
          "title": "dining table"
        }
      ]

  return (
    <div className="grid grid-cols-12 px-16 py-7 bg-gray-100 gap-7">
     <Sidebar category={category}/>
     <Outlet/>
    </div>
  )
}

export default Root