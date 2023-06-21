
import React from 'react'
import Form from 'react-bootstrap/Form';

export default function PersonalDetails() {
    return (
        <div className='container m-4 bg-white p-5 rounded-3'>
            <h4 style={{ color: '#355967' }} className='mb-4'>Personal Details</h4>
            <Form>
                <div className='d-flex gap-4'>
                    <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                        <Form.Label>Employee Name</Form.Label>
                        <Form.Control type="text" placeholder="Johny Wilson" />
                    </Form.Group>

                    <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control type="text" placeholder="134" />
                    </Form.Group>
                </div>
                <div className='d-flex gap-4'>
                    <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="019827844" />
                    </Form.Group>

                    <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                        <Form.Label>Alternative Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="030783545" />
                    </Form.Group>
                </div>
                <div className='d-flex gap-4'>
                    <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="johny@gmail.com" />
                    </Form.Group>

                    <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" placeholder="03/02/1998" />
                    </Form.Group>
                </div>
                <div className='d-flex gap-4'>

                    <div className="mb-3 w-50">
                        <Form.Label>District</Form.Label>
                        <Form.Select  >
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>

                    <div className="mb-3 w-50">
                        <Form.Label>District</Form.Label>
                        <Form.Select  >
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <div className="mb-3 w-50">
                        <Form.Label>District</Form.Label>
                        <Form.Select  >
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                </div>
                <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                    <Form.Label>Full Address</Form.Label>
                    <Form.Control type="text" placeholder="Johny Wilson" />
                </Form.Group>

                <div className='d-flex gap-2'>
                    <button style={{
                        backgroundColor: '#14749B',
                        color: 'white',
                        borderRadius: '7px',
                        padding: '7px 15px',
                        border: 'none'
                    }}>Upload Image</button>
                    <div> <p>Clear selected image</p></div>
                </div>
            </Form>
        </div>
    )
}
