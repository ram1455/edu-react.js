import React from "react";
import {Container, Row } from "react-bootstrap";
import Carded from "./Card";
import Search from "./Search";

export default class News extends React.Component{ 
    state ={
        jSon :[],
        searchInput : '',
        cardData : ''
    }

    handleInput =(inputData)=>{
        this.setState({searchInput: inputData}, ()=> console.log(this.state.searchInput + ' dari index'))
    }

    handleCard = (card)=>{
        this.setState({cardData : card})
    }
    render(){
        return(
            <Container className="m-auto mt-5">
                <Row>
                    <Search inputData={this.handleInput}/>
                </Row>
                <Carded searchData={this.state.searchInput} handleCard={this.handleCard}/>
            </Container>  
        )
    }
}