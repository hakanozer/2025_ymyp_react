import React, { useEffect } from 'react'
import { allUsers } from '../services/profileService'

function Users() {

  useEffect(() => {
    allUsers().then(res => {
      console.log(res.data.data)
    })
  }, [])

  return (
    <div>Users</div>
  )
}

export default Users