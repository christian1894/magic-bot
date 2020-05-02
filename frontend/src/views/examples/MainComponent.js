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
import { Row, Col, Modal, Button } from 'reactstrap'
// core components
// import ExamplesNavbar from 'components/Navbars/ExamplesNavbar.js'
import Footer from 'components/Footer/Footer.js'
import * as service from './MainComponentService.js'
import Lottie from './LottieComponent'

class MainComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      healthLoading: 
      true,
      miniModal: false 
    }
  }

  async componentDidMount () {
    console.log('componentDIdMount')
    try {
      const health = await service.health()
      this.setState({
      healthLoading: !health
    })
    } catch(error) {
      console.log(error)
      this.setState({
        miniModal: true
      })
    }
    
    document.body.classList.toggle('landing-page')
  }

  componentWillUnmount () {
    console.log('willumnount')
    document.body.classList.toggle('landing-page')
  }
  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
  };
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
          {/* <Footer /> */}
          {
            this.state.healthLoading && <Lottie />
          }
          {/* Start Mini Modal */}
          <Modal
              modalClassName="modal-mini modal-danger modal-mini"
              isOpen={this.state.miniModal}
              toggle={() => this.toggleModal("miniModal")}
            >
              <div className="modal-header justify-content-center">
                <button
                  className="close"
                  onClick={() => this.toggleModal("miniModal")}
                >
                  <i className="tim-icons icon-simple-remove text-white" />
                </button>
                <div className="modal-profile-danger">
                  <i className="tim-icons icon-alert-circle-exc" />
                </div>
              </div>
              <div className="modal-body">
                <p>Something has failed :( please check the server status and try again</p>
              </div>
              <div className="modal-footer">
                <Button
                  className="btn-neutral"
                  color="link"
                  onClick={() => this.toggleModal("miniModal")}
                  type="button"
                >
                  Close
                </Button>
              </div>
            </Modal>
            {/* End Mini Modal */}
        </div>
      </>
    )
  }
}

export default MainComponent
