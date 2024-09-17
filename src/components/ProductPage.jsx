import React, { useContext } from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { context } from '../Context';

function ProductPage({ product }) {

    
    const {cartC, setCartC} = useContext(context);
    const {cartItems, setCartItems} = useContext(context);
    const navigate = useNavigate();

    const location = useLocation();
    const pData = location.state?.pData;

    const { id } = useParams()
    const data = product.find((element) => element.id === Number(id))
    console.log(data);

    function addc(){

        const itemInCart = cartItems.find(item => item.id === data.id);
        if (itemInCart) {
          setCartItems(cartItems.map(item => 
            item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
          ));
        } else {
          setCartItems([...cartItems, { ...data, quantity: 1 }]);
        }
        setCartC(cartC + 1);
        navigate('/cart')
    }


    return (
        <Container>
            <Card style={{width:'100%',marginTop:'80px'}} >
                <Card.Img variant="top" src={data.thumbnail || pData.thumbnail} style={{ width: '30%', height: '200px' }} />
                <Card.Body>
                    <Card.Title style={{ fontWeight: '700', fontSize:'38px' }}>{data.title}</Card.Title>
                    <Card.Text>
                        {data.description || pData.description}
                    </Card.Text>
                    <Card.Text style={{ fontWeight: '700', fontSize:'32px' }}>
                        $ {data.price || pData.price}
                    </Card.Text>
                                        
                    <h4 style={{fontSize:'22px', fontWeight:'400'}}>
                        Discount : {data.discountPercentage || pData.discountPercentage}%
                    </h4>
                    
                    <h4 style={{fontSize:'22px', fontWeight:'400'}}>
                        Rating : {data.rating || pData.rating}/5
                    </h4>
                    <h4 style={{fontSize:'22px', fontWeight:'400'}}>
                        {data.warrantyInformation || pData.warrantyInformation}.
                    </h4>
                    <h4 style={{fontSize:'22px', fontWeight:'400'}}>
                        Stock : {data.stock || pData.stock}
                    </h4>
                    <p style={{border:'2px solid #878787', width:'fit-content', padding:'5px', borderRadius:'20px'}}>
                        {data.category || pData.category}
                    </p>
                    <div>
                    <h3>Images :</h3>
                    {data.images.map((image, key)=>(
                        <img src={image} key={key} style={{width:'300px', height:'250px'}}></img>
                    ) )}
                    </div>
                    <Button variant='success' style={{marginTop:'10px'}} onClick={addc}> Add To Cart </Button>
                    
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ProductPage
