import React, { useEffect, useState } from 'react'
import { allUsers } from '../services/profileService'
import { ProfileUser } from '../models/IProfileUsers'

function Users() {

  const [singleUser, setSingleUser] = useState<ProfileUser>()
  const [users, setUsers] = useState<ProfileUser[]>([])

  useEffect(() => {
    allUsers().then(res => {
      setUsers(res.data.data)
      setSingleUser(res.data.data[0])
    }).catch( err => {
      localStorage.clear()
      window.location.replace('/')
    })
  }, [])

  return (
    <>
      <h3>Users</h3>
      <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Profile</th>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">UName</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        { users.map( (item, index) => 
          <tr onClick={() => setSingleUser(item)} key={index} role='button' data-bs-toggle="modal" data-bs-target="#exampleModal">
            <td>
              <img src={item.profile} alt="" width={50} />
            </td>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        )}
      </tbody>
    </table>
    { singleUser && 
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{singleUser.name}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className='d-flex justify-content-center'>
                <img src={singleUser.profile} alt="" className='img-thumbnail rounded-circle' />
              </div>
              <p>{singleUser.username}</p>
                <p>{singleUser.email}</p>
                <p>{singleUser.phone}</p>
                <p>{singleUser.website}</p>
                <p>{singleUser.company.name}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default Users