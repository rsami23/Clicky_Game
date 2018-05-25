import React, { Component } from 'react';
import Counter from "./components/counter";
import Jumbotron from "./components/jumbotron";
import Animal from "./components/animal"; 
import Footer from "./components/footer";
import animals from "./images.json";
import Wrapper from "./components/wrapper";

console.log("animals", animals);

class App extends Component {

  state = {
    animals, count: 0
  };

  // resetGame = () => {
  //   if (image.id === id) {
  //     this.setState({})
  //     console.log("id", id);
  //   }
  // }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  
  handleClick = id => {
    console.log("img-click");
    animals.sort(function(a, b) {return 0.5 - Math.random() });
    this.handleIncrement();
    this.setState({ animals });
    // this.resetGame();
  };

  render() {
    return (
      <div>
        <Counter count={this.state.count} />
        <Jumbotron />
        <div className="container">
        <Wrapper>
          {this.state.animals.map(animal => (
          <Animal
            id={animal.id}
            key={animal.id}
            image={animal.image}
            alt={animal.alt}  
            handleClick={this.handleClick}
          />        
          ))}
        </Wrapper>
        </div>
        <Footer />
      </div>
    )
  }
};




export default App;
