import React, { useContext, useState, useEffect } from 'react';
import { context } from '../Context';
import { Card, Button, Container } from 'react-bootstrap';

function Cart() {
  const { cartC, setCartC, cartItems, setCartItems } = useContext(context);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(total.toFixed(2));
  }, [cartItems]);

  const clearCart = () => {
    setCartItems([]);
    setCartC(0);
  };

  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  return (
    <>
      <Container>
        <h3 style={{ marginTop: '60px' }}>Your Cart.</h3>
      </Container>
      <Container>
        <Button variant='danger' onClick={clearCart}>
          Clear Cart
        </Button>
      </Container>
      <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {cartItems.map((data, key) => (
          <Card style={{ width: '100%', marginTop: '10px' }} key={key}>
            <Card.Img variant="top" src={data.thumbnail} style={{ width: '30%', height: '200px' }} />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.description}</Card.Text>
              <Card.Text style={{ fontWeight: '700' }}>$ {data.price.toFixed(2)}</Card.Text>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button variant='primary' onClick={() => decreaseQuantity(data.id)}>-</Button>
                <span style={{ margin: '0 10px' }}>{data.quantity}</span>
                <Button variant='primary' onClick={() => increaseQuantity(data.id)}>+</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
        <h3 style={{ marginTop: '30px' }}>Total: $ {total}</h3>
      </Container>
    </>
  );
}

export default Cart;
