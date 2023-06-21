import React from 'react'
import Table from 'react-bootstrap/Table';

export default function Home() {
  const employees = [
    {
      ID: 1,
      Name:'Nur Alam',
      Phone: 18277364,
      Email:"some@gmail.com",
      Company:"Skylane Edu",
      Department:"Human resources",
      Status:"active",
      Action:"..."
      
    },
    {
      ID: 2,
      Name:'Nur Alam',
      Phone: 18277364,
      Email:"some@gmail.com",
      Company:"Skylane Edu",
      Department:"Human resources",
      Status:"active",
      Action:"..."
      
    },
    {
      ID: 3,
      Name:'Nur Alam',
      Phone: 18277364,
      Email:"some@gmail.com",
      Company:"Skylane Edu",
      Department:"Human resources",
      Status:"active",
      Action:"..."
      
    },
    {
      ID: 4,
      Name:'Nur Alam',
      Phone: 18277364,
      Email:"some@gmail.com",
      Company:"Skylane Edu",
      Department:"Human resources",
      Status:"active",
      Action:"..."
      
    },
    {
      ID: 5,
      Name:'Nur Alam',
      Phone: 18277364,
      Email:"some@gmail.com",
      Company:"Skylane Edu",
      Department:"Human resources",
      Status:"active",
      Action:"..."
      
    },
    
  ]
  return (
    <div style={{margin:'50px 40px',borderRadius:'15px',overflow:'hidden',fontSize:'14px'}}>
      <Table hover borderless >
      <thead>
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
      <tbody>
      {
        employees.map((data)=><tr>
          <td style={{color:'#788084'}}>{data.ID}</td>
          <td style={{color:'#788084'}}>{data.Name}</td>
          <td style={{color:'#788084'}}>{data.Phone}</td>
          <td style={{color:'#788084'}}>{data.Email}</td>
          <td style={{color:'#788084'}}>{data.Company}</td>
          <td style={{color:'#788084'}}>{data.Department}</td>
          <td style={{color:'#788084'}}>{data.Status}</td>
          <td style={{color:'#788084'}}>{data.Action}</td>
        </tr>)
      }
     
      </tbody>
    </Table>
    </div>
  )
}
