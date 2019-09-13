import React, { Component } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

export class CharacterField extends Component {
    render() {
        return (
            <Div>
                Name: {this.props.name} <br />
                Gender: {this.props.gender} <br />
                Birth Year: {this.props.birthYear} <br />
            </Div>
        )
    }
}

//PropTypes
CharacterField.propTypes = {
    name: PropTypes.string,
    gender: PropTypes.string,
    birthYear: PropTypes.string,
}


//Styling
const Div = styled.div`
border-radius: 10px;
background: #fff;
opacity: 0.8;
width: calc(40% - 40px);
padding: 40px;
padding-top: 60px;
padding-bottom: 60px;
text-align: center;
margin-top: 50px;
`

export default CharacterField;
