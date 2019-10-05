import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/es/FormControl';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';


class Navigator extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
                alt=""
                src="https://digitalillustrated.com/wp-content/uploads/2018/04/ikoni-_0030_rahka.png"
                height={30}
                className="d-inline-block align-top"
            />
            {' Rahkaryhmä'}
          </Navbar.Brand>
          <Nav className="mr-auto"> </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
    )
  }
}


export default Navigator
