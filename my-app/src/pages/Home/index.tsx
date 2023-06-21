import React from 'react'
import Table from 'react-bootstrap/Table';
import SortIcon from '@mui/icons-material/Sort';
import AddIcon from '@mui/icons-material/Add';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import "./style.css"

export default function Home() {
  const employees = [
    {
      ID: 1,
      Name: 'Nur Alam',
      Phone: 18277364,
      Email: "some@gmail.com",
      Company: "Skylane Edu",
      Department: "Human resources",
      Status: "active",
      Action: "..."

    },
    {
      ID: 2,
      Name: 'Nur Alam',
      Phone: 18277364,
      Email: "some@gmail.com",
      Company: "Skylane Edu",
      Department: "Human resources",
      Status: "active",
      Action: "..."

    },
    {
      ID: 3,
      Name: 'Nur Alam',
      Phone: 18277364,
      Email: "some@gmail.com",
      Company: "Skylane Edu",
      Department: "Human resources",
      Status: "active",
      Action: "..."

    },
    {
      ID: 4,
      Name: 'Nur Alam',
      Phone: 18277364,
      Email: "some@gmail.com",
      Company: "Skylane Edu",
      Department: "Human resources",
      Status: "active",
      Action: "..."

    },
    {
      ID: 5,
      Name: 'Nur Alam',
      Phone: 18277364,
      Email: "some@gmail.com",
      Company: "Skylane Edu",
      Department: "Human resources",
      Status: "active",
      Action: "..."

    },

  ]
  return (
    <div className='home-container mx-5 my-3 rounded-3'>
      <div className='rounded-3'>
        <div className='d-flex align-items-center justify-content-between mb-4'>
          <div >
            <button type="button" className="btn me-2" data-mdb-ripple-color="dark" style={{ background: "white" }}><FileUploadOutlinedIcon /> Export</button>
            <button type="button" className="btn text-light" style={{ background: "orange" }}><DeleteOutlinedIcon />Delete</button>
          </div>
          <div className='d-flex align-items-center gap-3'>
            <input type="text" id="form12" placeholder='Search employee..' className="form-control" />
           <button type="button" className="btn " data-mdb-ripple-color="dark" style={{ background: 'white', width: '160px' }}> <SortIcon />Sort by</button>
           
              {/* <!-- Button trigger modal --> */}
              <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ width: '190px' }}>
              <AddIcon />  Add new
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex={parseInt("-1")} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    ...
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table className="table align-middle mb-0 rounded table-hover">
          <thead >
            <tr >
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Company</th>
              <th>Department</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{ background: 'red' }}>
            {
              employees.map((data) => <tr>

                <td>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">     {data.ID}</label>
                  </div>

                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{ width: '40px', height: '40px' }}
                      className="rounded-circle"

                    />
                    <div className="ms-3">
                      <p className="fw-normal mb-1">{data.Name}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">{data.Phone}</p>

                </td>
                <td>
                  <p className="fw-normal mb-1">{data.Email}</p>

                </td>
                <td>
                  <p className="fw-normal mb-1">{data.Company}</p>

                </td>
                <td>
                  <p className="fw-normal mb-1">{data.Department}</p>

                </td>
                <td>
                  <p className="fw-normal mb-1">{data.Status}</p>

                </td>

                <td>
                  <p className="fw-normal mb-1">...</p>

                </td>
              </tr>)
            }

          </tbody>
        </table>
        <nav aria-label="Page navigation example" className='float-end mt-4'>
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#"><ArrowBackOutlinedIcon/>Prev</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next<ArrowForwardOutlinedIcon/></a></li>
            </ul>
          </nav>
      </div>

    </div>
  )
}
