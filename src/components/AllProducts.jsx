import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function AllProducts({ all }) {

    console.log(all);
    
    return (
        <>
        <Container>
            <h1 style={{textAlign:'center', marginTop:'50px'}} className='primary'>All Products</h1>
        </Container>
        <Container style={{display:'flex', flexDirection:'row', flexWrap:'wrap', alignItems:'center', justifyContent:'center'}}>
            
            {all.slice(0, 120).map((data, key) => (
                <Card className='col-md-3 m-3' key={key}>
                    <Card.Img variant="top" src={data.thumbnail} style={{ width: '80%', height: '200px' }} />
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>
                            {data.description}
                        </Card.Text>
                        <Card.Text style={{ fontWeight: '700' }}>
                            $ {data.price}
                        </Card.Text>
                        <Button variant="primary" as={Link} to={`/product/${data.id}`}>View More</Button>
                    </Card.Body>
                </Card>
            ))}
        </Container>
        </>
    )
}

export default AllProducts
