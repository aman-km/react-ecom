import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function SingleProduct({ data  }) {

    
  return (

      
      <Card className='col-md-3 m-3' >
      <Card.Img variant="top" src={data.thumbnail} style={{width:'100%', height:'200px'}}/>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <Card.Text style={{fontWeight:'700'}}>
            $ {data.price}
        </Card.Text>
        <Button variant="primary" as={Link} to={`/product/${data.id}`}>View More</Button>
      </Card.Body>
    </Card>
  
  
  );
}

export default SingleProduct;
