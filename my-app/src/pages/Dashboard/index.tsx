import React from 'react';
import Button from 'react-bootstrap/Button';
import Employee from '../Employee';
import Profile from '../Profile';
import { Home } from '../Home';
import PersonalDetails from '../PersonalDetails';
import { EmployeeList } from '../EmployeeList';
import Header from '../../components/Header';
import CompanyDetail from '../companyDetails';
import logo from '../../assets/logo.jpeg'
import Collapse from 'react-bootstrap/Collapse';
import GridViewIcon from '@mui/icons-material/GridView';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { Container, Row, Col, Nav, Accordion } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import "./style.css"



export default function Dashboard() {
    const [open, setOpen] = React.useState(false);
    
    return (
        <div>
            <Router>
                <div  style={{backgroundColor:'#F5F7F8'}}>
                    <div className="row ">
                        {/* <Col md={2} style={{ backgroundColor: 'white', height: 'auto', padding: '30px' }}>
                           
                        </Col> */}
                        <div className="d-none d-md-block col-md-3 col-lg-2 bg-white">
                        <div className="d-flex justify-content-center py-2" >
                                <img src={logo} style={{ height: '100px', width: '100px' }} />
                            </div>

                            <Nav className="flex-column">
                                <Nav.Item className='nav-item'>
                                    <Nav.Link as={Link} to="/" style={{ color: '#788084' }} >
                                        <div className='d-flex '>
                                            <GridViewIcon />
                                            <p className='ms-2 '> Dashboard </p>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item >
                                    <Nav.Link as={Link} to="#"
                                        onClick={() => setOpen(!open)}
                                        aria-controls="emp-btn"
                                        aria-expanded={open}
                                        style={{ color: '#788084' }}
                                        className='d-flex justify-content-between '
                                    >

                                        <div className='d-flex justify-content-between'>
                                            <GridViewIcon />
                                            <p className='ms-2'> Employee</p>
                                        </div>
                                        <ChevronRightIcon />
                                    </Nav.Link>
                                    <Collapse in={open}>
                                        <div id="emp-btn">
                                            <Nav.Link as={Link} to="/employeelist" className='mx-4'>Employee list</Nav.Link>
                                            <Nav.Link as={Link} to="#" className='mx-4'>Add employee</Nav.Link>
                                        </div>
                                    </Collapse>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link as={Link} to="#" className='d-flex justify-content-between ' style={{ color: '#788084' }}>
                                        <div className='d-flex justify-content-between '>
                                            <GridViewIcon />
                                            <p className='ms-2'> Profile</p>
                                        </div>
                                        <ChevronRightIcon />
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        {/* <Col md={10} className='p-0' style={{ minHeight: '100vh' }}>
                           
                        </Col> */}
                        <div className="col-12 col-md-9 col-lg-10 min-vh-100 p-0">
                        <Header />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/employeelist" element={<EmployeeList />} />
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/employee" element={<Employee />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>
        </div>
    );
}
