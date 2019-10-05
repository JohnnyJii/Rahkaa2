import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './Player.css'
import './input.css'
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
    playbackRate: 1.0,
    played: 0,
    volume: 0.8,
    muted: false,
    loaded: 0
  }

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false
    })
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

  handleSetPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
  }

  handleSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  handleSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  handleVolumeChange = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }

  handleToggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }

  handleProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  render() {
    const {controls, playing, played, playbackRate, volume, muted, loaded} = this.state

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
                             playbackRate={playbackRate}
                             volume={volume}
                             muted={muted}
                             onProgress={this.handleProgress}
                             width='100%'
                             height='100%'
                >
                </ReactPlayer>
              </div>
              <div className="divtest">
                <p className="header">Played</p>
                <progress className="progressbar" max={1} value={played} />
              </div>
              <div className="divtest">
                <p className="header">Loaded</p>
                <progress className="progressbar" max={1} value={loaded} />
              </div>
            </Col>
            <Col sm={4} className="test">
              <div>
                <p className="header">Controls</p>
                <button className="button" onClick={this.handleStop}>Stop</button>
                <button className="button" onClick={this.handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
                <button className="button" onClick={this.handleClickFullscreen}>Fullscreen</button>
              </div>

              <br/>

              <div>
                <p className="header">Speed</p>
                <button className="button" onClick={this.handleSetPlaybackRate} value={1}>1x</button>
                <button className="button" onClick={this.handleSetPlaybackRate} value={1.5}>1.5x</button>
                <button className="button" onClick={this.handleSetPlaybackRate} value={2}>2x</button>
              </div>

              <br/>

              <div>
                <p className="header">Seek</p>
                <input
                    type='range' min={0} max={1} step='any'
                    value={played}
                    onMouseDown={this.handleSeekMouseDown}
                    onChange={this.handleSeekChange}
                    onMouseUp={this.handleSeekMouseUp}
                />
              </div>

              <br/>

              <div>
                <p className="header">Volume</p>
                <input type='range' min={0} max={1} step='any' value={volume} onChange={this.handleVolumeChange} />
              </div>

            </Col>
          </Row>
        </Container>
    )
}
}


export default hot (module) (Player)
