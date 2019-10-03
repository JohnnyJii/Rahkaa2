import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './Player.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigator from './Navigator';
import Container from 'react-bootstrap/Container';
import { hot } from 'react-hot-loader'
import {findDOMNode} from 'react-dom';
import screenfull from 'screenfull'

class Player extends Component {
  state = {
    playing: true,
    controls: false,
  }

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing })
  }

  handleStop = () => {
    this.setState({ url: null, playing: false })
  }

  handleClickFullscreen = () => {
    screenfull.request(findDOMNode(this.player))
  }


  render() {
    const {controls, playing} = this.state

    return (
        <Container>
          <Row>
            <Col>
              <Navigator/>
            </Col>
          </Row>
          <Row>
            <Col sm={8} className="test">
              <div className="player-wrapper">
                <ReactPlayer className="react-player"
                             url='https://www.youtube.com/watch?v=CnxiRt4qeM4'
                             loop
                             controls={controls}
                             playing={playing}
                             volume='0.75'
                             width='100%'
                             height='100%'
                             onReady={() => console.log('onReady')}
                             onStart={() => console.log('onStart')}
                             onPlay={this.handlePlay}
                >
                </ReactPlayer>
              </div>
            </Col>
            <Col sm={4} className="test">
              <button onClick={this.handleStop}>Stop</button>
              <button onClick={this.handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
              <button onClick={this.handleClickFullscreen}>Fullscreen</button>
            </Col>
          </Row>
        </Container>
    )
}
}


export default hot (module) (Player)
