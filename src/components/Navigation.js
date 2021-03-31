import React from 'react';

import { 
    Nav, 
    Navbar,
    Form,
    FormControl,
    Button 
} from 'react-bootstrap';

const Navigation = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Address Book</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="MainNavigaton">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/add-contact">Add Contact</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;