import React, { useContext } from 'react'
import { context } from '../Context';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SearchResultSingle from './SearchResultSingle';
import ProductPage from './ProductPage';

function SearchQuery() {

  const {searchProduct, setSearchProduct} = useContext(context);
  console.log(searchProduct);
  const {cartC, setCartC} = useContext(context);
  const {cartItems, setCartItems} = useContext(context);

  const navigate = useNavigate();

  function addc(){

    setCartItems([...cartItems]);
    setCartC(cartC + 1);
    navigate('/cart')
}

  return (
    <>
    <Container style={{marginTop:'20px'}}>
    <h1 style={{marginTop:'50px'}}>Results..</h1>
    </Container>
    <Container style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
      {searchProduct.map((data, key)=> (
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
            <Button variant="primary" as={Link} to={{ pathname: `/product/${data.id}`, state: { pData: data } }}>More Details</Button>
        </Card.Body>
    </Card>
      ))}
      
    </Container>
    </>
  )
}

export default SearchQuery
