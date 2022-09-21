import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Carded extends React.Component {

  shouldComponentUpdate(){
    return true
}

  constructor(props){
    super(props)
    this.state={
      img: props.img,
      judul: props.judul,
      author: props.author,
      deskripsi: props.deskripsi,
      tanggal: props.tanggal
    }
  }
    render(){
        return (
        <Card style={{width: '13.7rem', height:'25rem',justifyContent:'center', alignContent:'center', margin:'40px 10px', display:'inline-block'}}>
            <Card.Img variant="top" alt="image" 
            src={this.state.img}/>
            
            <Card.Body style={{overflow:'auto', height:'17.5rem'}}>
              <Card.Title>{this.props.judul}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
              {this.state.author}{" "}{this.state.tanggal}
              </Card.Subtitle>
              <Card.Text>
                {this.state.deskripsi}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        );
    }
}

export default Carded;