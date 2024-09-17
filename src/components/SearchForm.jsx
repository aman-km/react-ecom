import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { context } from '../Context';
import { useNavigate } from 'react-router-dom';

function SearchForm() {

    const [Search, setSearch] = useState("");
    const {searchProduct, setSearchProduct} = useContext(context);

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setSearch(event.target.value);
        console.log(Search);
        
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        const query = Search.trim().replace(/\s+/g, '+');
        const sRequest = await fetch(`https://dummyjson.com/products/search?q=${query}`);
        const sProducts = await sRequest.json();
        setSearchProduct(sProducts.products);
        navigate('/search')
    };

    return (
        <div>
            <Form className="d-flex" onSubmit={handleSearch}>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={Search}
                    onChange={handleInputChange}
                />
                <Button variant="outline-success" type="submit">Search</Button>
            </Form>

        </div>
    )
}

export default SearchForm
