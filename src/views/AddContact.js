import React, { Fragment, useEffect, useState } from 'react';
import {
    Form,
    Col,
    Button
} from 'react-bootstrap';

import PostcodeSearch from '../components/PostcodeSearch';

import { Offline, Online } from 'react-detect-offline';
import { DBCoreRangeType } from 'dexie';

import slugify from 'react-slugify';
import PageTitle from '../components/PageTitle';


const AddContact = ({ db }) => {

    const [address, setAddress] = useState({address:null});

    useEffect(
        () => {
            // Create the store
            //db.version(1).stores({ formData: 'id,value'});

            // db.transaction('rw', db.formData, async () => {
            //     const dbAddress = await db.formData.get('address');

            //     if(!dbAddress) await db.formData.add({id: 2, value: address});

            //     setAddress({address: dbAddress ? dbAddress.value : ''})
            // }).catch(e => {
            //     console.log(e.stack || e);
            // })

            // return () => db.close();
        },
        // Run effect when the database connection changes
        [db]
    )

    const saveAddress = id => value => {
        //db.contacts.put({ id, value });
        //setAddress(prevAddress => ( value ));
        console.log(db.contacts);
        db.contacts.add({slug: id, contactDetails:value});
        window.location.href = `/contact/${id}`;
    }

    const handleSetAddress = address => setAddress(address);

    const handleSubmit = e => {
        e.preventDefault();
        let formData = new FormData(e.target);
        // console.log(e)
        // for (let value of formData.values()){
        //     console.log(value);
        // }
        let nameSlug = slugify(`${formData.get('first_name')} ${formData.get('last_name')}`, {delimiter:'-'});
        let parsedData = {};
        for (let key of formData.keys()){
            parsedData[key] = formData.get(key);
        }
        
        saveAddress(nameSlug)(parsedData);
    }

        return(
        <Form autoComplete="off" onSubmit={handleSubmit}>
            <PageTitle title="Add Contact" />
            <Form.Row>
                <Form.Group as={Col} controlId="ContactFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="first_name" type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group as={Col} controlId="ContactLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="last_name" type="text" placeholder="Last Name" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="ContactEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Email" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="PostcodeSearch">
                <Form.Label>Address Search</Form.Label>
                <PostcodeSearch
                    onAddressChange={handleSetAddress}
                />
            </Form.Group>
            {address.address !== null &&
                <Fragment>
                    <Form.Row>
                        <Form.Group as={Col} controlId="AddressBuildingName">
                            <Form.Label>Building Name</Form.Label>
                            <Form.Control name="building_name" type="text" defaultValue={ address.building_name} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="AddressBuildingNumber">
                            <Form.Label>Building Number</Form.Label>
                            <Form.Control name="building_number" type="text" defaultValue={ address.building_number} />
                        </Form.Group>
                    </Form.Row>

                    
                    <Form.Group controlId="AddressLine1">
                        <Form.Label>Address Line 1</Form.Label>
                        <Form.Control name="line_1" type="text" defaultValue={ address.line_1} />
                    </Form.Group>
                    <Form.Group controlId="AddressLine2">
                        <Form.Label>Address Line 2</Form.Label>
                        <Form.Control name="line_2" type="text" defaultValue={ address.line_2} />
                    </Form.Group>
                    <Form.Group controlId="AddressLine3">
                        <Form.Label>Address Line 3</Form.Label>
                        <Form.Control name="line_3" type="text" defaultValue={ address.line_3} />
                    </Form.Group>
                    <Form.Group controlId="AddressLine4">
                        <Form.Label>Address Line 4</Form.Label>
                        <Form.Control name="line_4" type="text" defaultValue={ address.line_4} />
                    </Form.Group>

                    
                    <Form.Group controlId="AddressLocality">
                        <Form.Label>Locality</Form.Label>
                        <Form.Control name="locality" type="text" defaultValue={ address.locality} />
                    </Form.Group>
                    <Form.Group controlId="AddressCity">
                        <Form.Label>Town or City</Form.Label>
                        <Form.Control name="town_or_city" type="text" defaultValue={ address.town_or_city} />
                    </Form.Group>
                    <Form.Group controlId="AddressCounty">
                        <Form.Label>County</Form.Label>
                        <Form.Control name="county" type="text" defaultValue={ address.county} />
                    </Form.Group>
                    <Form.Group controlId="AddressCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control name="country" type="text" defaultValue={ address.country} />
                    </Form.Group>
                    <Form.Group controlId="AddressPostcode">
                        <Form.Label>Postcode</Form.Label>
                        <Form.Control name="postcode" type="text" defaultValue={ address.postcode} />
                    </Form.Group>


                </Fragment>
            }
            <Online>
                <Button variant="primary" type="submit">
                    Add Contact
                </Button>
            </Online>
            <Offline>
                You are currently offline!
            </Offline>
        </Form>
        )
    // }
}

export default AddContact;