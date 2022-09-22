import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Form, Row} from "react-bootstrap";


export default class SearchCard extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
        items : [],
        searchValue : 'Everything'
        }
    }
    
    async componentDidMount(){
        const {searchValue} = this.state
            await fetch(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=${searchValue}&from=2022-09-22&sortBy=popularity&apiKey=1033aecce70049c1b495e6fce89408d0
            `)
            .then((resp)=> resp.json())
            .then((json)=> {
                this.setState({
                    items   : json.articles
                })
            })
    }

    handleSubmit=(event)=> {
        event.preventDefault();
        this.setState({searchValue : event.target.value}, ()=> console.log(this.state.searchValue))
    }
    render(){
        const {items} = this.state;
        return(
        <Container className="m-auto mt-5">
            <Row>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group style={{width:'53.7rem', display:'inline-block'}}>
                        <Form.Control type="text" placeholder="Search articles" />
                    </Form.Group>
                    <Button variant="danger" type="submit" style={{display:'inline'}}>
                        Search
                    </Button>
                </Form>
            </Row>
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
        </Container>
        )
    }
}
