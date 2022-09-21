import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row } from "react-bootstrap";


class Carded extends React.Component {

  constructor(props){
    super(props)
    this.state={
      items : [],
      searchValue : 'Everything'
    }
  }

  async componentDidMount(){
    const {searchValue} = this.state
        await fetch(`https://newsapi.org/v2/everything?q=${searchValue}&from=2022-09-19&sortBy=popularity&apiKey=4d2091e1cd304872a8853ba912ae8c93`)
        .then((resp)=> resp.json())
        .then((json)=> {
            this.setState({
                items   : json.articles
            })
        })
  }
  
  handleInputData =(data)=>{
    this.setState({searchValue : data}, console.log(this.state.searchValue + ' dari card'))
  }

    render(){
    const {items} = this.state;
        return (
          <Row>
            {
                    items.map((item, index) => (
                    <Card key={index} style={{width: '13.7rem', height:'25rem',justifyContent:'center', alignContent:'center', margin:'40px 10px', display:'inline-block', padding: '0px 12px'}}>
                        <Card.Img variant="top" alt="image" 
                        src={item.urlToImage}/>
                        <Card.Body style={{overflow:'auto', height:'17.5rem'}}>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">
                          {item.author}{" "}{item.publishedAt}
                          </Card.Subtitle>
                          <Card.Text>
                            {item.content}
                          </Card.Text>
                          <Button variant="primary">More Details</Button>
                        </Card.Body>
                    </Card>

                    ))
                }
          </Row>
        
        )
    }
}

export default Carded;