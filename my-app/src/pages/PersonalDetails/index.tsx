
import React from 'react'
import Form from 'react-bootstrap/Form';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

export default function PersonalDetails() {
    return (
        <div className='container m-1 bg-white  rounded-3'>
            <h4 style={{ color: '#355967' }} className='mb-4'>Personal Details</h4>
            <Form>
                <div className='d-flex gap-4'>
                    <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                        <Form.Label>Employee Name</Form.Label>
                        <Form.Control type="text" placeholder="Johny Wilson" className='rounded-4'/>
                    </Form.Group>

                    <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control type="text" placeholder="134" className='rounded-4'/>
                    </Form.Group>
                </div>
                <div className='d-flex gap-4'>
                    <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="019827844" className='rounded-4'/>
                    </Form.Group>

                    <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                        <Form.Label>Alternative Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="030783545" className='rounded-4'/>
                    </Form.Group>
                </div>
                <div className='d-flex gap-4'>
                    <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="johny@gmail.com" className='rounded-4'/>
                    </Form.Group>

                    <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" placeholder="03/02/1998" className='rounded-4'/>
                    </Form.Group>
                </div>
                <div className='d-flex gap-4'>

                    <div className="mb-3 w-50">
                        <Form.Label>District</Form.Label>
                        <Form.Select  className='rounded-4'>
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>

                    <div className="mb-3 w-50">
                        <Form.Label>District</Form.Label>
                        <Form.Select  className='rounded-4'>
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <div className="mb-3 w-50">
                        <Form.Label>District</Form.Label>
                        <Form.Select  className='rounded-4'>
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                </div>
                <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                    <Form.Label>Full Address</Form.Label>
                    <Form.Control type="text" placeholder="Johny Wilson" className='rounded-4'/>
                </Form.Group>
                <div className='my-5 mx-1'>
           
            <div className='d-flex align-items-center gap-2'>
                <p style={{
                    backgroundColor: '#14749B',
                    color: 'white',
                    borderRadius: '7px',
                    padding: '7px 15px',
                    border: 'none',
                    cursor:'pointer'
                }}><FileUploadOutlinedIcon/>Upload Image</p>
                <div><p>Clear selected image</p></div>
            </div>
            <p style={{ color: '#355967' }} className='mb-4'>Pleae upload a .jpg or .png file with a minimum dimention of 400W not exceding 5mb</p>
        </div>
            </Form>
        </div>
    )
}
