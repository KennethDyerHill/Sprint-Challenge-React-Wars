import React, { useState, useEffect } from "react";
import './App.css'
import CharacterField from './components/CharacterField';
import LoadingButton from './components/LoadingButton';
import styled from 'styled-components';
import axios from 'axios';

let keyCounter = 0;

// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.

function App() {
  const [state, setState] = useState({ characters: [] });
  const [urlPage, setPage] = useState(1);
  const url = 'https://swapi.co/api/people/?page=';
  const fetchApi = () => {
    axios(url + urlPage)
      .then(response => {
        console.log(response)
        setState({ characters: [...state.characters, response.data.results] })
        if (response.next !== null) {
          setPage(urlPage + 1)
        }
      })
  }
  useEffect(() => {
    fetchApi();
  },[]);
  return (
    <Container>
      {state.characters.map(array => {
        let arr1 = array.map(character => {
          keyCounter++;
          return (
            <CharacterField name={character.name} birthYear={character.birth_year} gender={character.gender} key={keyCounter} />
          )
        })
        return (arr1)
      })}
      <LoadingButton onClick={fetchApi} />
    </Container>)
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
