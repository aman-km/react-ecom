import React from 'react'
import { Button, Card, Container } from 'react-bootstrap';

function SearchResultSingle({ data }) {

    return (
        <Container>
            <Card style={{width:'100%',marginTop:'30px'}} >
                <Card.Img variant="top" src={data.thumbnail} style={{ width: '30%', height: '200px' }} />
                <Card.Body>
                    <Card.Title style={{ fontWeight: '700', fontSize:'38px' }}>{data.title}</Card.Title>
                    <Card.Text>
                        {data.description}
                    </Card.Text>
                    <Card.Text style={{ fontWeight: '700', fontSize:'32px' }}>
                        $ {data.price}
                    </Card.Text>
                                        
                    <h4 style={{fontSize:'22px', fontWeight:'400'}}>
                        Discount : {data.discountPercentage}%
                    </h4>
                    
                    <h4 style={{fontSize:'22px', fontWeight:'400'}}>
                        Rating : {data.rating}/5
                    </h4>
                    <h4 style={{fontSize:'22px', fontWeight:'400'}}>
                        {data.warrantyInformation}.
                    </h4>
                    <h4 style={{fontSize:'22px', fontWeight:'400'}}>
                        Stock : {data.stock}
                    </h4>
                    <p style={{border:'2px solid #878787', width:'fit-content', padding:'5px', borderRadius:'20px'}}>
                        {data.category}
                    </p>
                    <div>
                    <h3>Images :</h3>
                    {data.images.map((image, key)=>(
                        <img src={image} key={key} style={{width:'300px', height:'250px'}}></img>
                    ) )}
                    </div>
                    <Button variant='success' style={{marginTop:'10px'}}> Add To Cart </Button>
                    
                </Card.Body>
            </Card>
        </Container>
    )
}

export default SearchResultSingle
