import React from "react";
import styled from "styled-components";

const Kontainer = styled.div
`
    width : 400px
    height : 400px
    margin : 10px auto
`


export default class BenFetch extends React.Component{
    state={
        isLoading : true,
        person : null,
        person2 : null
    }
    async componentDidMount(){
        // const url = 'https://newsapi.org/v2/everything?q=Apple&from=2022-09-21&sortBy=popularity&apiKey=d9f3789bf9714911b1cfa0c3f60037d4';
        // const response = await fetch(url).then( resp => resp.json());
        // this.setState({person : response.articles, isLoading : false})
        // console.log(this.state.person);
        console.log('did');
        const url2 = 'https://randomuser.me/api/';
        const response2 = await fetch(url2).then( resp => resp.json());
        this.setState({person2 : response2.results[0], isLoading : false})  
    }
    
    render(){
        console.log('render');
        const {person2} = this.state;
        return(
            <Kontainer>
                {
                    this.state.isLoading ? 
                    <div>loading...</div> 
                    :
                    <div> 
                        <ol>
                            {
                                
                                    <div>
                                    <p> Nama :{person2.name.first}</p>
                                    <p>{}</p>
                                    <p>{}</p>
                                    <p>{}</p>

                                    </div>
                            }
                        </ol>
                    </div>
                }
                <button onClick={this.handleClick}>click</button>
            </Kontainer>
        )
    }
}