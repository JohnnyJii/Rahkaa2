import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigator from './Navigator';
import Player from './Player';
import './App.css'

class Grid extends Component {

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

  render() {
    const {playing} = this.state
    return (
        <Container>
          <Row>
            <Col>
              <Navigator/>
            </Col>
          </Row>
          <Row>
            <Col sm={8} className="test">
              <Player/>
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


export default Grid
