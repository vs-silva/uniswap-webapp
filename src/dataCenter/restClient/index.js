import Config from '../../config';
import Axios from 'axios';
import Services from './services';

const _engine = Axios.create({
    baseURL: Config.api.rest.endpoint,
    timeout: 1000
});

export default Services(_engine);
