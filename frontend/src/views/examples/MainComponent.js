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
import { Row, Col } from 'reactstrap'
// core components
// import ExamplesNavbar from 'components/Navbars/ExamplesNavbar.js'
import * as service from './MainComponentService.js'
import LottieComponent from './LottieComponent'
import IFrameComponent from './IFrameComponent'
import ModalComponent from './ModalComponent'

class MainComponent extends React.Component {
  constructor (props) {
    super(props)
    this.toggleModal = this.toggleModal.bind(this)
    this.state = {
      healthLoading:
        true,
      miniModal: false
    }
  }

  async componentDidMount () {
    try {
      const health = await service.health()
      this.setState({
        healthLoading: !health
      })
    } catch (error) {
      console.log(error)
      this.setState({
        miniModal: true
      })
    }

    document.body.classList.toggle('landing-page')
  }

  componentWillUnmount () {
    document.body.classList.toggle('landing-page')
  }

  toggleModal (modalState) {
    this.setState({
      [modalState]: !this.state[modalState]
    })
  };

  render () {
    return (
      <>
        {/* <ExamplesNavbar /> */}
        <div className='wrapper'>
          <div className='content-center'>
            <Row className='row-grid justify-content-between align-items-center text-left'>
              <Col className='d-flex justify-content-center' md='12'>
                <IFrameComponent />
              </Col>
            </Row>
          </div>
          {/* <Footer /> */}
          {
            this.state.healthLoading && <LottieComponent />
          }
          {/* Start Mini Modal */}
          <ModalComponent
            toggleModal={this.toggleModal}
            miniModal={this.state.miniModal}
          />
          {/* End Mini Modal */}
        </div>
      </>
    )
  }
}

export default MainComponent
