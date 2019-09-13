import React, { Component } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';



export class LoadingButton extends Component {
    render() {
        return (
            <Button onClick={this.props.onClick}>
                Load more fantastic characters!
            </Button>
        )
    }
}

//PropTypes
LoadingButton.propTypes = {
    onClick: PropTypes.func,
}

//Styling
const Button = styled.button`
font-family: Starjedi;
display: inline-block
color: palevioletred;
font-size: 1em;
padding: 3em 3em;
border: 2px solid palevioletred;
border-radius: 10px;
margin: auto;
width: 30%;
margin-top: 50px;
margin-bottom: 50px;
`;

export default LoadingButton
