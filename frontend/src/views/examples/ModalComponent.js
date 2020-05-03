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
import { Modal, Button } from 'reactstrap'

const ModalComponent = (props) => {
  return (
    <>

      <Modal
        modalClassName='modal-mini modal-danger modal-mini'
        isOpen={props.miniModal}
        toggle={() => props.toggleModal('miniModal')}
      >
        <div className='modal-header justify-content-center'>
          <button
            className='close'
            onClick={() => props.toggleModal('miniModal')}
          >
            <i className='tim-icons icon-simple-remove text-white' />
          </button>
          <div className='modal-profile-danger'>
            <i className='tim-icons icon-alert-circle-exc' />
          </div>
        </div>
        <div className='modal-body'>
          <p>Something has failed :( please check the server status and try again</p>
        </div>
        <div className='modal-footer'>
          <Button
            className='btn-neutral'
            color='link'
            onClick={() => props.toggleModal('miniModal')}
            type='button'
          >
            Close
          </Button>
        </div>
      </Modal>

    </>
  )
}

export default ModalComponent
