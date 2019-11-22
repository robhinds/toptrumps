import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import unknownAnimal from '../../assets/cards/default.jpg';

export default class Modal extends Component {

  render() {
    return (
      <MDBContainer>
        <MDBModal isOpen={this.props.isOpen} toggle={this.props.toggleModal}>
          <MDBModalHeader toggle={this.props.toggleModal}>{this.props.title}</MDBModalHeader>
          <MDBModalBody>
            {this.props.message}
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn onClick={this.props.toggleModal} color="primary">{this.props.actionTitle}</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
      );
  }
}
