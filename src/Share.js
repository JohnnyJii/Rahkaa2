import React, { Component } from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  EmailIcon,
} from 'react-share'


const Share =()=> {
  let shareUrl
  const hostname = window.location.hostname
  const path = window.location.pathname
    if ( hostname === 'localhost') {
      shareUrl = 'http://localhost:8000' + path
    } else {
      shareUrl = window.location.href
    } 

    const title = 'Rahkaa'
    const iconSize = 35

    return (
      <div className="d-flex justify-content-sm-center">
        <FacebookShareButton
        url={shareUrl}
        quote={title}
        >
          <FacebookIcon round size={iconSize}/>
        </FacebookShareButton>

        <TwitterShareButton
          url={shareUrl}
          title={title}
        >
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>

        <WhatsappShareButton
        url={shareUrl}
        title={title}
        >
          <WhatsappIcon round size={iconSize}/>
        </WhatsappShareButton>

        <LinkedinShareButton
          url={shareUrl}
          title={title}
          >
          <LinkedinIcon round size={iconSize} />
        </LinkedinShareButton>

        <EmailShareButton
        url={shareUrl}
        quote={title}
        >
          <EmailIcon round size={iconSize} />
        </EmailShareButton>
      </div>
    )
    }




export default Share