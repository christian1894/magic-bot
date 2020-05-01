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
import Iframe from 'react-iframe'
// reactstrap components
import { Row, Col } from 'reactstrap'
// core components
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar.js'
import Footer from 'components/Footer/Footer.js'

class MainComponent extends React.Component {
  componentDidMount () {
    document.body.classList.toggle('landing-page')
  }

  componentWillUnmount () {
    document.body.classList.toggle('landing-page')
  }

  render () {
    return (
      <>
        {/* <ExamplesNavbar /> */}
        <div className='wrapper'>
          <div className='content-center'>
            <Row className='row-grid justify-content-between align-items-center text-left'>
              <Col className='d-flex justify-content-center' md='12'>
                <Iframe
                  url='https://console.dialogflow.com/api-client/demo/embedded/magic'
                  width='100%'
                  height='430px'
                  id='myId'
                  className='myClassname'
                />
              </Col>
            </Row>
          </div>
          <Footer />
        </div>
      </>
    )
  }
}

export default MainComponent
