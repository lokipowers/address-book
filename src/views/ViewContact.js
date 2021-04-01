import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PageTitle from '../components/PageTitle';
import Error404 from './Error404';

const ViewContact = ({ db }) => {

    const { contactId } = useParams();

    const [address, setAddress] = useState({address:null});


    useEffect(
        () => {
            db.contacts.where("slug").equalsIgnoreCase(contactId).first((contact) => {
                //const address = await db.formData.get(contactId);
                setAddress({address:contact.contactDetails});

            }).catch(e => {
                console.log(e.stack || e);
            });
        }
    )

    return(
        <Fragment>
            { address === null && 
                <Error404 />
            }
            <PageTitle title="Contact Details" />
            <span>{address.first_name}</span>
        </Fragment>
    )

}


export default ViewContact;