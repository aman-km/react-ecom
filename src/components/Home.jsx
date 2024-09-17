import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import SingleProduct from './SingleProduct'
import { alignPropType } from 'react-bootstrap/esm/types'
import { Link } from 'react-router-dom'

function Home({ products }) {
    return (
        <Container>
            <Row style={{ marginTop: '50px' }} className='flex-wrap' id='hero'>
                <Col style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <h2>Welcome To E-Com.</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu luctus sapien. Pellentesque ac magna iaculis, maximus justo ac,
                        faucibus magna. Aenean non vestibulum sem, vitae mattis turpis. Nam porttitor massa placerat, tempus nisi in, bibendum odio. Nam molestie tellus odio,
                    </p>
                    <Button variant='primary' style={{ width: '100px' }} as={Link} to={'/products'}>Shop Now</Button>
                </Col>
                <Col style={{ alignItems: 'end', width:'100%' }}>
                    <img src={'https://m.media-amazon.com/images/G/31/amazonservices/Blog/What_is_an_E-commerce_business.jpg'} style={{ width: '100%', height: 'fit-content' }} />
                </Col>
            </Row>
            <Row>
                <h1 style={{ textAlign: 'center' }}>Products</h1>
            </Row>
            <Row className='justify-content-center'>

                {products.slice(0, 9).map((product, key) => (
                    <SingleProduct data={product} key={key} />
                ))}


                <Button variant='primary' as={Link} to='/products' style={{width:'250px'}}>View All Products</Button>
            </Row>
            <Row style={{ marginTop: '50px' }}>
                 <Col style={{ alignItems: 'end' }} className='col-md-6 col-sm-6'>
                    <img src={'https://m.media-amazon.com/images/G/31/amazonservices/Blog/What_is_an_E-commerce_business.jpg'} style={{ width: '100%', height: 'fit-content' }} />
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', flexWrap:'wrap' }} className='col-md-6 col-sm-6'>
                    <h2>About E-Com</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu luctus sapien. Pellentesque ac magna iaculis, maximus justo ac,
                        faucibus magna. Aenean non vestibulum sem, vitae mattis turpis. Nam porttitor massa placerat, tempus nisi in, bibendum odio. Nam molestie tellus odio,
                    </p>
                    <Button variant='primary' style={{ width: '200px' }} as={Link} to={'/about'}>Learn More</Button>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Home
