import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import objects from "./objects.json";

// let score = 0;
// let topScore = 0;

//array of clicked items with their ids
let clickedItems = [];


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    objects,
    score: 0,
    topScore: 0
  };

  checkArray = id => {
    console.log("check:" + id);
    // clickedItems.indexOf(id);
    if (clickedItems.indexOf(id) === -1) {
      clickedItems.push(id);
      console.log(clickedItems);
      this.state.score ++;
      console.log("Score: " + this.state.score);
      if (this.state.score > this.state.topScore) {
        this.state.topScore ++;

      } else {
        return this.state.topScore;
      }

    } else {
      this.handleGameOver();
    }
    //see if id matches any ids in the clicked array
    //if the id is in the clicked array, handle game over
    //if the id is not in the array, push the id to the array
      //increase score by 1

    //call the handle Shufflefuntion

  }

  handleGameOver = () => {
    //reset everything to 0, clear state
    //check the total score, if higher, update
    this.setState({ score: 0 }, 
      () => {
        console.log(this.state.score);
      });
    alert("You lose")
  }

  handleShuffle = () => {
    //for loop => go through the array and shuffle => return the array
    //google this
    
    //set the state to the new shuffled object
    this.setState({
      objects: this.state.objects.sort(function(a, b){
        return 0.5 - Math.random()
      })
    })
  }

  handleClick = id => {
    console.log("I've been clicked", id);
    this.checkArray(id);
    this.handleShuffle(id);
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <div className="col-lg-6"><p>Score: {this.state.score}</p></div>
        <div className="col-lg-6"><p>Top Score: {this.state.topScore}</p></div>
        {this.state.objects.map(friend => (
          <Card
            handleClick={this.handleClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
        
      </Wrapper>
    );
  }
}

export default App;
