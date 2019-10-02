import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './Player.css';

class Player extends Component {
  render() {
    return (
        <div className="wrapper">
          <ReactPlayer className="player"
          url='https://www.youtube.com/watch?v=1y6smkh6c-0&list=RD1y6smkh6c-0&start_radio=1'
          playing={false}
          loop
          controls={true}
          volume='0.75'
          width='75%'
          height='75%'
          >
          </ReactPlayer>
        </div>
    )
}
}


export default Player
