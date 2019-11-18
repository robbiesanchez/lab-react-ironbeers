import React, { Component } from 'react';
import axios from "axios";
import 'react-router-dom';

export default class Random extends Component {
    
    state = {
        randomBeer: {}
    }
    

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random').then(randomBeer=>{
          console.log(randomBeer)
          this.setState({
              randomBeer: randomBeer.data
        })
        })
      }
    
    

        

    
    // showRandomBeer = () => {
    //     return this.state.randomBeer.map(eachBeer => {
    //         console.log(this.state.randomBeer)
    //         return (
    //             <div>
    //             <h4>{eachBeer.name}</h4>
    //             <img src={eachBeer.image_url} width="100px" />
    //             <p>{eachBeer.description}</p>
    //             </div>
                
    //         )
    //     })
    // }
    
    render() {
        return (
            <div>
                <h4>{this.state.randomBeer.name}</h4>
                <img src={this.state.randomBeer.image_url} width="100px" />
                <p>{this.state.randomBeer.description}</p>
            </div>
        )
    }
}
