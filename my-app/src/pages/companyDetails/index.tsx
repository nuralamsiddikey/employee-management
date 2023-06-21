
import React from 'react'
import Form from 'react-bootstrap/Form';

export default function CompanyDetail() {
    return (
        <div className='container m-4 bg-white p-5 rounded-3'>
            <h4 style={{ color: '#355967' }} className='mb-4'>Company Details</h4>
            <Form>
                <div className='d-flex gap-4'>
                    <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                        <Form.Label >Company Name</Form.Label>
                        <Form.Control type="text" placeholder="Johny Wilson" />
                    </Form.Group>

                    <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                        <Form.Label>Department</Form.Label>
                        <Form.Control type="text" placeholder="134" />
                    </Form.Group>
                </div>
                <div className='d-flex gap-4'>
                    <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control type="text" placeholder="019827844" />
                    </Form.Group>

                    <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                        <Form.Label>Date of Joining</Form.Label>
                        <Form.Control type="text" placeholder="some" />
                    </Form.Group>
                </div>
                <div className='d-flex gap-4'>
                    <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                        <Form.Label>Duty Time</Form.Label>
                        <Form.Control type="email" placeholder="johny@gmail.com" />
                    </Form.Group>

                    <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                        <Form.Label>Attendance Time</Form.Label>
                        <Form.Control type="text" placeholder="some" />
                    </Form.Group>
                </div>
                <div className='d-flex gap-4'>
                    <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                        <Form.Label>Salary Type</Form.Label>
                        <Form.Control type="email" placeholder="johny@gmail.com" />
                    </Form.Group>

                    <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                        <Form.Label>Salary(per class/per mont)</Form.Label>
                        <Form.Control type="text" placeholder="some" />
                    </Form.Group>
                </div>
                <div className='d-flex gap-4'>
                    <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                        <Form.Label>Terminate Date</Form.Label>
                        <Form.Control type="text" placeholder="some" />
                    </Form.Group>

                    <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                        <Form.Label>Termination Reason</Form.Label>
                        <Form.Control type="text" placeholder="some" />
                    </Form.Group>
                </div>
                <div className=''>
                <p>Document</p>
                    <button style={{
                        backgroundColor: '#14749B',
                        color: 'white',
                        borderRadius: '7px',
                        padding: '7px 15px',
                        border: 'none'
                    }}>Upload Image</button>   
                </div>       
            </Form>
        </div>
    )
}
