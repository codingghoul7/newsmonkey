import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class Newsitem extends Component {
  render() {

    let {card_title,card_des}=this.props

    return (
    
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{card_title}</Card.Title>
        <Card.Text>
       {card_des}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    )
  }
}

export default Newsitem
