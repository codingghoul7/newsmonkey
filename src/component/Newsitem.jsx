import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import error from "../assets/404.png";


export class Newsitem extends Component {




  render() {

    let {card_title,card_des,imgurl,newsurl}=this.props

    return (
    
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgurl ? imgurl : {error} } />
      {error}
      <Card.Body>
        <Card.Title>{card_title}</Card.Title>
        <Card.Text>
       {card_des}
        </Card.Text>
        <Button variant="primary" href={newsurl} target="_blank" >Go somewhere</Button>
      </Card.Body>
    </Card>

    )
  }
}

export default Newsitem
