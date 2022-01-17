import React from 'react'
import { Modal, Form, ModalBody,ModalHeader,FormGroup, ModalFooter, Button,Label,Input } from 'reactstrap';

export  default class ModalV1 extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        modalSignup: false,
        modalAlert: false,
        name: ""
      }
      
      this.toggleSignup = this.toggleSignup.bind(this)
      this.toggleAlert = this.toggleAlert.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }
    
    toggleSignup() {
      this.setState({
        modalSignup: !this.state.modalSignup
      })
    } 
    
    toggleAlert() {
      this.setState({
        modalAlert: !this.state.modalAlert
      })
    }
  
    handleSubmit() {
      if (this.state.name.length === 0)
      {
        this.setState({
          modalAlert: true
        })
      }
      else
      {
        this.setState({
          modalSignup: false
        })
      }
    }
    
    handleChange(e) {
      this.setState({
        name: e.target.value
      })
    }
    render() {
      return (
          <React.Fragment>
            <Button size="lg" color="success" onClick={this.toggleSignup}>Sign up</Button>
            <Modal isOpen={this.state.modalSignup} toggle={this.toggleSignup}>
              <ModalHeader toggle={this.toggleSignup}>Signup form</ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup>
                    <Label for="idNameInput">
                      Name:
                    </Label>
                    <Input type="text" name="nameInput" id="idNameInput" placeholder="Enter your name" onChange={this.handleChange}/>
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={this.handleSubmit}>Done</Button>
              </ModalFooter>
          </Modal>
          <Modal isOpen={this.state.modalAlert} toggle={this.toggleAlert}>
            <ModalHeader toggle={this.toggleAlert}>Error</ModalHeader>
            <ModalBody>The name cannot be empty</ModalBody>
            <ModalFooter>
              <Button onClick={this.toggleAlert}>OK</Button>
            </ModalFooter>
          </Modal>
          
        </React.Fragment>
      )
    }
  }
  