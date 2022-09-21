import React from "react";
import { Button, Form} from "react-bootstrap";

export default class Search extends React.Component{
    
    render(){

        return(
            <Form onSubmit={this.props.onClick}>
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