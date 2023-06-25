import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import SortIcon from '@mui/icons-material/Sort';
import AddIcon from '@mui/icons-material/Add';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useNavigate } from 'react-router-dom';
import { UseEmployeeContext } from '../../context/EmployeeContext';
import Form from 'react-bootstrap/Form';
import cogoToast from 'cogo-toast';
import "./style.css"

type emp = any

export const EmployeeList = () => {
  const [employee, setEmployee] = useState<emp | null>(null);
  const [newEmp, setNewEmp] = useState<emp | null>({});
  const [deleteId, setDeleteId] = useState<emp | null>([]);
  const [search, setSearch] = useState<emp | null>("")
  const { id, name, phone, email, company, department } = newEmp
  const navigate = useNavigate()

  const handleKeyDown = (event: emp) => {
    if (event.key === "Enter") {
      fetch(`http://localhost:8080/api/employee/search?q=${search}`)
        .then(res => res.json())
        .then(result => {
          setEmployee(result.data)
        })
    }
  }


  const handleDelete = () => {
    if (!deleteId.length) {
      cogoToast.warn("Select user first")
    }
    else {
      fetch('http://localhost:8080/api/employee/delete', {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(deleteId)
      })
        .then(res => res.json())
        .then(result => {
          cogoToast.success("Successfully deleted the user")
        })
    }
  }

  const contolDeleteId = (id: number) => {
    const index = deleteId.includes(id)
    if (index) {
      const updatedDeleteId = [...deleteId];
      updatedDeleteId.splice(index, 1);
      setDeleteId(updatedDeleteId);
    } else {
      setDeleteId([...deleteId, id]);
    }
  }

  const handleSubmit = () => {
    if (newEmp.length < 5) {
      cogoToast.error("All field must be field")
    } else {
      delete newEmp.id
      fetch("http://localhost:8080/api/employee/create", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newEmp)
      })
        .then(res => res.json())
        .then(result => {
          if (result.error) {
            cogoToast.error("This email already exist try another one")
          } else {
            setEmployee((emp: emp) => [...emp, result.data])
            cogoToast.success("Successfully registered")
          }

        })
        .catch(error => {
          cogoToast.error("Something went wrong")
          console.log(error)
        })
    }
  }

  useEffect(() => {
    fetch('http://localhost:8080/api/employee/find')
      .then(res => res.json())
      .then(result => {
        setEmployee(result.data)
      })
  }, [])


  return (
    <div className='home-container mx-5 my-3 rounded-3'>
    <div className='rounded-3'>
      <div className='d-flex align-items-center justify-content-between mb-4'>
        <div >
          <a
            href="http://localhost:8080/api/employee/export"
            style={{ textDecoration: 'none' }}>
            <button
              type="button"
              className="btn btn-sm me-2"
              data-mdb-ripple-color="dark"
              style={{ background: "white" }}>
              <FileUploadOutlinedIcon />
              Export
            </button>
          </a>

          <button
            onClick={handleDelete}
            type="button"
            className="btn btn-sm text-light"
            style={{ background: "orange" }}>
            <DeleteOutlinedIcon />
            Delete
          </button>

        </div>
        <div className='d-flex align-items-center gap-3'>
          <input
            type="text"
            id="form12"
            placeholder='Search by name or email'
            className="form-control"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}

          />
          <button
            type="button"
            className="btn btn-sm"
            data-mdb-ripple-color="dark"
            style={{ background: 'white', width: '160px' }}>
            <SortIcon />
            Sort by
          </button>

          {/* <!-- Button trigger modal --> */}
          <button type="button" className="btn btn-sm btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ width: '190px' }}>
            <AddIcon />  Add new
          </button>

          {/* <!-- Modal --> */}
          <div className="modal fade" id="exampleModal" tabIndex={parseInt("-1")} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Add new employee</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <Form>
                    <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                      <Form.Label>Employee Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="name"
                        className='rounded-3'
                        onChange={(e) => setNewEmp({ name: e.target.value, phone: phone, email: email, company: company, department: department })}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="phone"
                        className='rounded-3'
                        onChange={(e) => setNewEmp({ name: name, phone: e.target.value, email: email, company: company, department: department })}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="email"
                        className='rounded-3'
                        onChange={(e) => setNewEmp({ name: name, phone: phone, email: e.target.value, company: company, department: department })}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                      <Form.Label>Company</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="comapny"
                        className='rounded-3'
                        onChange={(e) => setNewEmp({ name: name, phone: phone, email: email, company: e.target.value, department: department })}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                      <Form.Label>Department</Form.Label>
                      <select
                        className="form-select w-100"
                        aria-label="Default select example"
                        onChange={(e) => setNewEmp({ name: name, phone: phone, email: email, company: company, department: e.target.value })}
                      >
                        <option selected>Department</option>
                        <option value="Human Resource">Human Resource</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Operations">Operations</option>
                        <option value="It">It</option>
                        <option value="Manning">Manning</option>
                      </select>
                    </Form.Group>
                  </Form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


     <div style={{overflowX:"auto"}}>
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
        <tbody >
          {
            (employee != null) ? employee.map((data: any) => <tr
              key={data.id}
              onClick={() => navigate('/profile')}
              style={{ cursor: 'pointer' }}
            >
              <td>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox" value=""
                    id="flexCheckDefault"
                    onClick={(e) => {
                      e.stopPropagation();
                      contolDeleteId(data.id)
                    }}
                  />
                  <label className="form-check-label"
                    htmlFor="flexCheckDefault">{data.id}
                  </label>
                </div>
              </td>

              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://avatars.githubusercontent.com/u/68794315?v=4"
                    alt=""
                    style={{ width: '25px', height: '25px' }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-normal mb-1">{data.name}</p>
                  </div>
                </div>
              </td>
              <td><p className="fw-normal mb-1">{data.phone}</p></td>
              <td> <p className="fw-normal mb-1">{data.email}</p></td>
              <td><p className="fw-normal mb-1">{data.company}</p></td>
              <td><p className="fw-normal mb-1">{data.department}</p></td>
              <td><p className="fw-normal mb-1">{(data.status) ? "Active" : "Inactive"}</p></td>
              <td>
                <p className="fw-normal mb-1">...</p></td>
            </tr>) : ""
          }


        </tbody>
      </table>
     </div>
      <nav aria-label="Page navigation example" className='float-end mt-4'>
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#"><ArrowBackOutlinedIcon />Prev</a></li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">Next<ArrowForwardOutlinedIcon /></a></li>
        </ul>
      </nav>
    </div>
  </div>
  )
}
