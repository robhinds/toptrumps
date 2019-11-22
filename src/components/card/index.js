import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import unknownAnimal from '../../assets/cards/default.jpg';

export default class Card extends Component {

  render() {
    return (
      <MDBCol>
        <MDBCard style={{ width: "100%" }}>
          <MDBCardImage className="img-fluid" src={this.props.animalImage || unknownAnimal} waves />
          <MDBCardBody>
            <MDBCardTitle>{this.props.animalName || 'No animal name yet'}</MDBCardTitle>
            <MDBCardText>
              {this.props.animalDescription || 'No animal description yet'}
            </MDBCardText>
            <div className="container">
              <div className="row">
                <div className="offset-2 col-8">
                  <MDBBtn onClick={() => this.props.onClickPlay("animalStrength")} style={{width:"100%"}}>Strength: {this.props.animalStrength || '0'}</MDBBtn>
                </div>
              </div>
              <div className="row">
                <div className="offset-2 col-8">
                  <MDBBtn onClick={() => this.props.onClickPlay("animalSpeed")} style={{width:"100%"}}>Speed: {this.props.animalSpeed || '0'}</MDBBtn>
                </div>
              </div>
              <div className="row">
                <div className="offset-2 col-8">
                  <MDBBtn onClick={() => this.props.onClickPlay("animalSize")} style={{width:"100%"}}>Size: {this.props.animalSize || '0'}</MDBBtn>
                </div>
              </div>
              <div className="row">
                <div className="offset-2 col-8">
                  <MDBBtn onClick={() => this.props.onClickPlay("animalLife")} style={{width:"100%"}}>Life: {this.props.animalLife || '0'}</MDBBtn>
                </div>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}
