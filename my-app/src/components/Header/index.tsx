import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Header() {
  return (
    <header className='bg-white p-3'>
      <Container>
        <Row className="align-items-center">
          <Col>
            <h4>HR Management</h4>
          </Col>
          <Col className="text-end">
            <Image src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile Image" roundedCircle width={40} height={40} />
          </Col>
        </Row>
      </Container>
    </header>
  );
}
