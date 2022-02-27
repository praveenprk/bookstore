import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../../styles/MyProfileScreenStyles/Badge.css'

const MyBadge = () => {
  return (
    <span className='container text-center mt-5'>
        <Row className='cust-basic'>
            <Col className="cust-basic-details"
            lg={true}
            sm={12}
            md={6}
            xs={6}>
              <span>
              <p>Total 🛍</p>
              <p>200</p>
              </span>
            </Col>
            <Col className="cust-basic-details"
            lg={true}
            sm={12}
            md={6}
            xs={6}>
            <span>
              <p>
              💰 saved
              </p>
              <p>
                500
              </p>
            </span>
            </Col>
        </Row>
    </span>
  )
}

export default MyBadge