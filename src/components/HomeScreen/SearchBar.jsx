import React from 'react'
import { Form } from 'react-bootstrap'
import '../../styles/HomeScreen/Search.css'

function SearchBar() {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3 px-5" controlId="formBasicSearch">
                <i className="bi bi-search"></i>
                    <Form.Control
                    className='search-bar'
                    type="text"
                    placeholder="Find something..." />
                     <i className="bi bi-sort-up"></i>
                </Form.Group>
            </Form>
        </div>
    )
}

export default SearchBar
