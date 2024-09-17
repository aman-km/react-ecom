import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import { context } from '../Context';

function Header() {

    const {cartC, setCartC} = useContext(context);


    return (
        <Container>
            <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
                <Container fluid>
                    <Navbar.Brand >E-Com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/products'>Products</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        </Nav>
                        <SearchForm />

                        <Nav.Link as={Link} to='/cart' style={{marginLeft:'10px', position:'relative'}}>Cart<span style={{color:'red', fontWeight:'700',position:'absolute'}}>{cartC}</span></Nav.Link>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    )
}

export default Header
