import React, { Component } from 'react';
import axios from 'axios'

export default class BeerDetail extends Component {
    
    state = {
        specificBeer: {}
    }

    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`).then(specificBeer=>{
          console.log(specificBeer)
          this.setState({
              specificBeer: specificBeer.data
        })
        })
      }
    
    render() {
        console.log(this)
        return (
            <div>
            <h4>{this.state.specificBeer.name}</h4>
            <img src={this.state.specificBeer.image_url} width="100px" />
                <p>{this.state.specificBeer.description}</p>
            </div>
        )
    }
}
