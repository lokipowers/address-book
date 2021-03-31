import axios from 'axios';

export default axios.create({
    baseURL: `https://api.getAddress.io/`,
    params:{
        'api-key':'rNuUv4FtaUmpaaR42A2yMA30821',
        'all': true
    }
});