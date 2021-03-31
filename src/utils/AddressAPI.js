import getAddress from './getAddress';

const AddressAPI = {
    
    postcodeSearch(postcode) {
        const address = getAddress.get(`find/${postcode}`);
        console.log(address);
    },


    async autocomplete(query){
        const results = await getAddress.get(`autocomplete/${query}`);
        return results.data.suggestions;
    },

    async address(id){
        const address = await getAddress.get(`get/${id}`);
        return address.data;
    }


}

export default AddressAPI;