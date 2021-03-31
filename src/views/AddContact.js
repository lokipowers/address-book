import React, { Fragment } from 'react';
import {
    Form,
    Col,
    Button
} from 'react-bootstrap';

import PostcodeSearch from '../components/PostcodeSearch';

class AddContact extends React.Component {

    constructor(props){
        super(props);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.state = { 
            address:undefined
        }
    }

    handleAddressChange(address){
        this.setState({address});
    }

    render(){
        return(
        <Form autoComplete="off">
            <h1 className="mt-5 mb-2">Add Contact</h1>
            <hr className="mb-4"/>
            <Form.Row>
                <Form.Group as={Col} controlId="ContactFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group as={Col} controlId="ContactLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="ContactEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="PostcodeSearch">
                <Form.Label>Address Search</Form.Label>
                <PostcodeSearch
                    onAddressChange={this.handleAddressChange}
                />
            </Form.Group>
            {this.state.address !== undefined &&
                <Fragment>
                    <Form.Row>
                        <Form.Group as={Col} controlId="AddressBuildingName">
                            <Form.Label>Building Name</Form.Label>
                            <Form.Control type="text" defaultValue={this.state.address.building_name} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="AddressBuildingNumber">
                            <Form.Label>Building Number</Form.Label>
                            <Form.Control type="text" defaultValue={this.state.address.building_number} />
                        </Form.Group>
                    </Form.Row>

                    
                    <Form.Group controlId="AddressLine1">
                        <Form.Label>Address Line 1</Form.Label>
                        <Form.Control type="text" defaultValue={this.state.address.line_1} />
                    </Form.Group>
                    <Form.Group controlId="AddressLine2">
                        <Form.Label>Address Line 2</Form.Label>
                        <Form.Control type="text" defaultValue={this.state.address.line_2} />
                    </Form.Group>
                    <Form.Group controlId="AddressLine3">
                        <Form.Label>Address Line 3</Form.Label>
                        <Form.Control type="text" defaultValue={this.state.address.line_3} />
                    </Form.Group>
                    <Form.Group controlId="AddressLine4">
                        <Form.Label>Address Line 4</Form.Label>
                        <Form.Control type="text" defaultValue={this.state.address.line_4} />
                    </Form.Group>

                    
                    <Form.Group controlId="AddressLocality">
                        <Form.Label>Locality</Form.Label>
                        <Form.Control type="text" defaultValue={this.state.address.locality} />
                    </Form.Group>
                    <Form.Group controlId="AddressCity">
                        <Form.Label>Town or City</Form.Label>
                        <Form.Control type="text" defaultValue={this.state.address.town_or_city} />
                    </Form.Group>
                    <Form.Group controlId="AddressCounty">
                        <Form.Label>County</Form.Label>
                        <Form.Control type="text" defaultValue={this.state.address.county} />
                    </Form.Group>
                    <Form.Group controlId="AddressCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" defaultValue={this.state.address.country} />
                    </Form.Group>
                    <Form.Group controlId="AddressPostcode">
                        <Form.Label>Postcode</Form.Label>
                        <Form.Control type="text" defaultValue={this.state.address.postcode} />
                    </Form.Group>


                </Fragment>
            }
            <Button variant="primary" type="submit">
                Add Contact
            </Button>
        </Form>
        )
    }
}

export default AddContact;