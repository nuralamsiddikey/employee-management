import React from "react";
import "./style.css"
import {
  Container,
  Row,
  Col,
  Nav,
  Accordion,
  Image,
  Form,
} from "react-bootstrap";

export default function Profile() {
  const labelStyle = {
    fontWeight: "bold",
  };
  return (
    <div
      style={{
        margin: "50px 40px",
        // borderRadius: "15px",
        // overflow: "hidden",
        fontSize: "14px",
      }}
    >
      <Container fluid>
        <Row className="custom-row">
          <Col  className="custom-col-1 bg-white p-3 round">
            <div
              className="section1 text-center p-3"
              style={{ backgroundColor: "lightblue" }}
            >
              {/* <img
                style={{objectFit: "cover", width: "100%", height: "150px", borderRadius: "100%"}}
                src="https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg"
                alt=""
              /> */}
              <Image
                src="https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg"
                roundedCircle
                className="profile-img"
                style={{
                  width: "50%",
                  height: "100%",
                  outline: "10px",
                  outlineColor: "whitesmoke",
                }}
              />
              <h4 className="mt-2">Jenny Wilson</h4>
              <p>IT Manager</p>
            </div>
            <div className="section mt-3">
              <div className="data">
                <p className="d-1">Employee</p>
                <p className="d-2">SK01587</p>
              </div>
              <div className="data">
                <p className="d-1">Phone Number</p>
                <p className="d-2">+8801734223223</p>
              </div>
              <div className="data">
                <p className="d-1">Email Address</p>
                <p className="d-2">skylane.education@gmail.com</p>
              </div>
              <div className="data">
                <p className="d-1">Date of Birth</p>
                <p className="d-2">1 Feb 2001</p>
              </div>
              <div className="data">
                <p className="d-1">Gender</p>
                <p className="d-2">Male</p>
              </div>
              <div className="data">
                <p className="d-1">Address</p>
                <p className="d-2">dsg@gmail.com</p>
              </div>
              <div className="data">
                <p className="d-1">Date of Joining</p>
                <p className="d-2">dsg@gmail.com</p>
              </div>
              <div className="data">
                <p className="d-1">Company</p>
                <p className="d-2">dsg@gmail.com</p>
              </div>
              <div className="data">
                <p className="d-1">Department</p>
                <p className="d-2">dsg@gmail.com</p>
              </div>
              <div className="data">
                <p className="d-1">Address</p>
                <p className="d-2">dsg@gmail.com</p>
              </div>
              <div className="data">
                <p className="d-1">Designation</p>
                <p className="d-2">dsg@gmail.com</p>
              </div>
              <div className="data">
                <p className="d-1">Duty Type</p>
                <p className="d-2">Full Time</p>
              </div>
            </div>
          </Col>
          <Col  className="custom-col-2 bg-white p-3">
            <h4>Personal Details</h4>
            <Form>
              <div className="d-flex gap-4">
                <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                  <Form.Label style={labelStyle}>Employee Name</Form.Label>
                  <Form.Control type="text" placeholder="Johny Wilson" />
                </Form.Group>

                <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                  <Form.Label style={labelStyle}>Employee ID</Form.Label>
                  <Form.Control type="text" placeholder="134" />
                </Form.Group>
              </div>
              <div className="d-flex gap-4">
                <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                  <Form.Label style={labelStyle}>Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="019827844" />
                </Form.Group>

                <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                  <Form.Label style={labelStyle}>
                    Alternative Phone Number
                  </Form.Label>
                  <Form.Control type="text" placeholder="030783545" />
                </Form.Group>
              </div>
              <div className="d-flex gap-4">
                <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                  <Form.Label style={labelStyle}>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="johny@gmail.com" />
                </Form.Group>

                <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                  <Form.Label style={labelStyle}>Date of Birth</Form.Label>
                  <Form.Control type="date" placeholder="03/02/1998" />
                </Form.Group>
              </div>
              <div className="d-flex gap-4">
                <div className="mb-3 w-50">
                  <Form.Label style={labelStyle}>District</Form.Label>
                  <Form.Select>
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>

                <div className="mb-3 w-50">
                  <Form.Label style={labelStyle}>Upazilla</Form.Label>
                  <Form.Select>
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <div className="mb-3 w-50">
                  <Form.Label style={labelStyle}>Union</Form.Label>
                  <Form.Select>
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
              </div>
              <div className="mb-3 w-100">
                <Form.Label style={labelStyle}>Full Address</Form.Label>
                <Form.Control type="text" placeholder="Jenny Wilson" />
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}