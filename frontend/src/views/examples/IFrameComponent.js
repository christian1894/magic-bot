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
import Iframe from 'react-iframe'
import React from 'react'

const IFrameComponent = () => {
  return (
    <>
      <Iframe
        url='https://console.dialogflow.com/api-client/demo/embedded/magic'
        width='100%'
        height='500px'
        id='myId'
        className='myClassname'
      />
    </>
  )
}

export default IFrameComponent
