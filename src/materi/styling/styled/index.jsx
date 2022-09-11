import React from "react";
import styled from "styled-components";

const Button = styled.button 
`
    border: 2px solid dodgerblue;
    background-color: white;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    margin: 10px 20px;
    color: dodgerblue;
    &:hover {
    background: dodgerblue;
    color: white;
    }
`

export default class Styled extends React.Component{

    render(){
        return(
            <div>
            <Button>Go Eduwork</Button>
            </div>

        )
    }
}