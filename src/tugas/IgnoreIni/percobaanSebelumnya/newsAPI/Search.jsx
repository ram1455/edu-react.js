import React from "react";
import { Button, Form} from "react-bootstrap";

export default class Search extends React.Component{
    
    handleSubmit=(event)=> {
        this.props.inputData(event.target[0].value)
        event.preventDefault();
        console.log(event.target[0].value + ' dari search');
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group style={{width:'53.7rem', display:'inline-block'}}>
                    <Form.Control type="text" placeholder="Search articles" />
                </Form.Group>
                <Button variant="danger" type="submit" style={{display:'inline'}}>
                    Search
                </Button>
            </Form>
        )
    }
}