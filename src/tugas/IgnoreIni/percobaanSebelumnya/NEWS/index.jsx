import React from "react";
import { Container, Row } from "react-bootstrap";
import Carded from "./Card";
import Search from "./Search";

export default class News extends React.Component{ 

    constructor(){
        super();

        this.state={
            items: [],
            searchValue: 'Everything'
        };
    }
    
    componentDidMount()
    {
        const {searchValue} = this.state
        fetch(`https://newsapi.org/v2/everything?q=${searchValue}&from=2022-09-19&sortBy=popularity&apiKey=8e43ceee3eb84a2aa9ccce147385e73c`)
        .then((resp)=> resp.json())
        .then((json)=> {
            this.setState({
                items   : json.articles
            })
        })
    }
    handleSearch =(element)=>{
        element.preventDefault();
        this.setState({searchValue: element.target[0].value})
    }
    render(){
    const {items} = this.state;
        return(
            <Container className="m-auto mt-5">
                <Row>
                    <Search onClick={this.handleSearch}/>
                </Row>
                <Row>
                {
                    items.map((item, index) => (
                            <Carded key={index} 
                            judul={item.title} 
                            img={item.urlToImage} 
                            deskripsi={item.content}
                            tanggal={item.publishedAt}
                            author={item.author} />
                    ))
                }
                </Row>
            </Container>  
        )


    }
}