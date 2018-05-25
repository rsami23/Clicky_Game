import React, { Component } from "react";
import animals from "../images.json";
import Animal from "./animal";

class Body extends Component {
    state = {
        animals
    };

    render() {
        return (
            <div className="container">
                {this.state.animals.map(animal => (
                    <ImageSection
                        id={animal.id}
                        key={animal.id}
                        image={animal.image}
                        alt={animal.alt}
                    />
                ))}
            </div>
        );
    }
}

export default Body;