import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'


class Navigator extends Component {
  render() {
    return (
      <div>
        <Navbar fixed="sticky-top" bg="primary" variant="dark">
          <Navbar href="#home">Home</Navbar>
            <Navbar href="#">valikko</Navbar>
            <Navbar href="#">valikko</Navbar>
            <Navbar href="#">valikko</Navbar>
            <Navbar href="#">valikko</Navbar>
        </Navbar>
      </div>
    )
  }
}


export default Navigator