import React from 'react';
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Restaurants({item}) {
  return (

     <Link to={`restaurants/${item.id}`}>
       <Card className='my-2 p-3 rounded'>
         <Card.Img variant="top" src={item.photograph}  className='p-3'/>
         <Card.Body as='div'>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>Cuisine:{item.cuisine_type}</Card.Text>
            <Card.Text> {item.neighborhood}</Card.Text>
         </Card.Body>
     </Card>
     </Link>
  );
}

export default Restaurants;