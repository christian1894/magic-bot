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
import Lottie from 'lottie-react-web'
import animation from '../../assets/animations/bot2.json'

const LottieComponent = () => {
  return (
    <>
      <Lottie
        options={{
          animationData: animation
        }}
        style={{
          position: 'fixed', /* Sit on top of the page content */
          width: '100%', /* Full width (cover the whole page) */
          height: '100%', /* Full height (cover the whole page) */
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundColor: '#171941', /* Black background with opacity */
          zIndex: '1' /* Specify a stack order in case you're using a different order for other elements */
        }}
      />
    </>
  )
}

export default LottieComponent
