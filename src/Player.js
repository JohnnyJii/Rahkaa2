import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Player extends Component {
  render() {
    return (
        <ReactPlayer
        url='https://www.youtube.com/watch?v=1y6smkh6c-0&list=RD1y6smkh6c-0&start_radio=1'
        >
        </ReactPlayer>
    ) 
}
}


export default Player