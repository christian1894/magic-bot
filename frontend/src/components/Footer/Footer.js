/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'
// reactstrap components
import {
  Container,
  Row,
  Col
} from 'reactstrap'

class Footer extends React.Component {
  render () {
    return (
      <footer className='footer'>
        <Container>
          <Row className='justify-content-center'>
            <Col md='3'>
              <h1 className='title text-center'><span>Christian•Páez</span></h1>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}

export default Footer
