import React, { Fragment, Component } from 'react';
import Card from '../components/card';
import Modal from '../components/modal';
import animals from '../data/animaldata';
import { MDBContainer, MDBAlert } from 'mdbreact';

export default class GameContainer extends Component {
  state = {
    gameInProgress: true,
    playerCards: [],
    computerCards: [],
    interimResultModal: false,
    interimResultMessage: "",
    resultModal: false
  }

  componentDidMount() {
    //1. shuffle the cards
    //2. split them between player one and two
    const shuffled = animals.sort((a,b) => 0.5 - Math.random())
    const midPoint = Math.ceil(shuffled.length/2)
    this.setState({
      playerCards: shuffled.slice(0, midPoint),
      computerCards: shuffled.slice(midPoint)
    })
  }

  render() {
    const { gameInProgress, playerCards, computerCards, interimResultModal, interimResultMessage, resultModal } = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <MDBAlert color="success" >
              Your cards remaining: {playerCards.length} (your opponent has {computerCards.length} remaining)
            </MDBAlert>
            <Card {...playerCards[0]}
              onClickPlay={(attribute) => {
                const playerCard = playerCards[0]
                const computerCard = computerCards[0]
                const playerScore = playerCard[attribute]
                const computerScore = computerCard[attribute]
                var message = ""
                var newPlayerCards = []
                var newComputerCards = []
                console.log("SCORES: " + playerScore + " vs " + computerScore)
                if (playerScore >= computerScore) {
                  newPlayerCards = playerCards.slice(1)
                  newPlayerCards.push(playerCard)
                  newPlayerCards.push(computerCard)
                  newComputerCards = computerCards.slice(1)
                  message = ("Woohoo! Your " + playerCard.animalName + " beat the opponents "
                    + computerCard.animalName + " " + playerScore + " vs " + computerScore)
                } else {
                  newComputerCards = computerCards.slice(1)
                  newComputerCards.push(playerCard)
                  newComputerCards.push(computerCard)
                  newPlayerCards = computerCards.slice(1)
                  message = ("Oh no! Your " + playerCard.animalName + " was beaten by your opponents "
                    + computerCard.animalName + " " + playerScore + " vs " + computerScore)
                }
                if (!newPlayerCards.length || !newComputerCards.length) {
                  const finalMessage = newComputerCards.length ?
                    "Sorry, you are all out of cards, your oppoent has won this time! Why not play again?"
                    : "Woohoo, you won the game, your opponent has lost all their cards!"
                  this.setState({
                    resultModal: true,
                    interimResultMessage: finalMessage
                  })
                } else {
                  this.setState({
                    interimResultModal: true,
                    interimResultMessage: message,
                    playerCards: newPlayerCards,
                    computerCards: newComputerCards
                  })
                }
              }}
            />
          </div>
          <Modal isOpen={interimResultModal}
            title="Battled!"
            actionTitle="Next round"
            message={interimResultMessage}
            toggleModal={() => this.setState({interimResultModal: (!interimResultModal), interimResultMessage: ""}) }
          />
          <Modal isOpen={resultModal}
            title="Game Over!"
            actionTitle="Restart game"
            message={interimResultMessage}
            toggleModal={() => {
              const shuffled = animals.sort((a,b) => 0.5 - Math.random())
              const midPoint = Math.ceil(shuffled.length/2)
              this.setState({
                resultModal: (!resultModal),
                interimResultMessage: "",
                playerCards: shuffled.slice(0, midPoint),
                computerCards: shuffled.slice(midPoint)
              })
            }}
          />
        </div>
      </div>
    );
  }

}
