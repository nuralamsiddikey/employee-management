import React from "react";
import "./style.css"
import PersonalDetails from "../PersonalDetails";
import CompanyDetail from "../companyDetails";
import { Document } from "../Document";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useNavigate } from "react-router-dom";

import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

export default function Profile() {
  const navigate = useNavigate()

  return (
    <div
      style={{
        margin: "25px 40px",
        fontSize: "14px",
      }}
    >

      <div
        className="d-flex align-items-center mb-3">
        <KeyboardBackspaceOutlinedIcon
          onClick={() => navigate('/employeelist')}
          style={{ cursor: 'pointer' }}
        />
        <h6 className="m-0">
          Employee details</h6>
      </div>
      <div className="row" >
        <div className="col-12 col-md-4  rounded-3">
          <div className="bg-white rounded-3 p-4">
            <div
              className=" w-100 text-center rounded-4 pb-2 "
              style={{ background: "#E8F1F5" }}>
              <img
                className="rounded-circle w-50 mx-auto d-block "

                src="https://avatars.githubusercontent.com/u/68794315?v=4"
              />
              <h4 className="mt-2">Jenny Wilson</h4>
              <p>IT Manager</p>
            </div>
            <div className="section mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <p className="d-1">Employee</p>
                <p className="d-2">SK01587</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="d-1">Phone Number</p>
                <p className="d-2">+8801734223223</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="d-1">Email Address</p>
                <p className="d-2">skylane.education@gmail.com</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="d-1">Date of Birth</p>
                <p className="d-2">1 Feb 2001</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="d-1">Gender</p>
                <p className="d-2">Male</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="d-1">Address</p>
                <p className="d-2">dsg@gmail.com</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="d-1">Date of Joining</p>
                <p className="d-2">dsg@gmail.com</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="d-1">Company</p>
                <p className="d-2">dsg@gmail.com</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="d-1">Department</p>
                <p className="d-2">dsg@gmail.com</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="d-1">Address</p>
                <p className="d-2">dsg@gmail.com</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="d-1">Designation</p>
                <p className="d-2">dsg@gmail.com</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="d-1">Duty Type</p>
                <p className="d-2">Full Time</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-8 bg-white rounded-3">
          <nav className="top-nav mb-3">
            <ul className="nav d-flex justify-content-between ">
              <li className="nav-item">
                <a href="#">Personal Details</a>
              </li>

              <li className="nav-item">
                <a href="#">Company Details</a>
              </li>


              <li className="nav-item">
                <a href="#">Leave</a>
              </li>
              <li className="nav-item">
                <a href="#">Leave quata</a>
              </li>
              <li className="nav-item">
                <a href="#">Time sheet</a>
              </li>
              <li className="nav-item">
                <a href="#">Emmergency</a>
              </li>
              <li className="nav-item">
                <a href="#">Appreciation</a>
              </li>
            </ul>
          </nav>

          <PersonalDetails />
          <CompanyDetail />
          <Document />
        </div>
      </div>

    </div>
  );
}