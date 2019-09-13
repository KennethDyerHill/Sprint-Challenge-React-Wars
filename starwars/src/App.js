import React, { Component } from 'react'
import './App.css'
import CharacterField from './components/CharacterField';
import LoadingButton from './components/LoadingButton'
import uuid from 'uuid';
import styled from 'styled-components';


// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { characters: [] };
    //urls made as properties of App not a state, because when using setState automatically calls render function 
    this.url = 'https://swapi.co/api/people/?page=';
    this.urlPage = 1;  
  }
  //fetching first part of characters
  componentDidMount() {
    this.fetchApi();
  }

  //fetching characters' API
  fetchApi = () => {
    fetch(this.url + this.urlPage)
      .then(function (response) {
        return response.json();
      })
      .then(response => {
        this.setState({ characters: [...this.state.characters, response.results] })
        if (response.next !== null) {
          this.urlPage++;
        }
      })
  }


  render() {
    return (
      <Container>
        {this.state.characters.map(array => {
          let arr1 = array.map(character => {
            return (
              <CharacterField name={character.name} birthYear={character.birth_year} gender={character.gender} key={uuid.v4()} />
            )

          })
          return (arr1)
        })}
        <LoadingButton onClick={this.fetchApi} />
      </Container>
    );
  }
}

//styling

const Container = styled.div`
font-family: Starjedi;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-content: center;
`


export default App
