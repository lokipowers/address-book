import React from 'react';
import axios from 'axios';

export default class AddressBook extends React.Component{
    state = {
        address: []
    }

    componentDidMount(){
        axios.get(`ttps://api.getAddress.io/find/sw1a2aa?expand=true&api-key=rNuUv4FtaUmpaaR42A2yMA30821`)
        .then(res => {
            const address = res.data;
            this.setState({address});
        })
    }

    render() {
        return(
            <ul>
                { this.state.address.map(person => <li>{line}</li>)}
            </ul>
        )
    }
}