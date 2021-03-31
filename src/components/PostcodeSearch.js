import React from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import AddressAPI from '../utils/AddressAPI';

const MIN_SEARCH_LENGTH = 3;
const PLACEHOLDER = "Postcode Search...";
const FIELD_ID = "PostcodeSearch";
const LABEL_KEY = "address";

async function searchPostcode(query) {
    return await AddressAPI.autocomplete(query);
}

async function getFullAddress(address) {
    return await AddressAPI.address(address);
}

class PostcodeSearch extends React.Component{

    constructor(props){
        super(props);
        this.handleAddressChange = this.handleAddressChange.bind(this);
    }

    state = {
        isLoading:false,
        options:[],
        query:''
    };

    _cache = {};

    handleAddressChange(addressId){
        this.props.onAddressChange(addressId);
    }

    render() {
        const filterBy = () => true;
        // const filterByFields = ['address']
        return (
            <AsyncTypeahead
                {...this.state}
                filterBy={filterBy}
                id={FIELD_ID}
                labelKey={LABEL_KEY}
                minLength={MIN_SEARCH_LENGTH}
                placeholder={PLACEHOLDER}
                onInputChange={this._handleInputChange}
                onSearch={this._handleSearch}
                renderMenuItemChildren={option => (
                    <div onClick={this._handleAddressClick.bind(this, option.id)} key={option.id}>
                        <span>{option.address}</span>
                    </div>
                )}
                useCache={false}
            />
        );
    }

    _handleInputChange = query => {
        this.setState({query});
    }

    _handleSearch = query => {
        if(this._cache[query]){
            this.setState({options: this._cache[query].options});
            return;
        }
        this.setState({ isLoading:true });
        searchPostcode(query).then(resp => {
            this._cache[query] = resp;
            this.setState({
                isLoading:false,
                options: resp
            });
        });
        return;
    }

    _handleAddressClick = addressId => {
        // console.log("Address ID");
        // console.log(addressId);
        getFullAddress(addressId).then(resp => {
            this.handleAddressChange(resp);
        });
    }
};

export default PostcodeSearch;